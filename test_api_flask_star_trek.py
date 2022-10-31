
import unittest
from HTMLTestRunner import HTMLTestRunner

import requests
from faker import Factory
fake = Factory.create('en_AU')

BASEURL = 'http://127.0.0.1:8888'
starships = BASEURL + '/starships'

class ST_API_Flask_test(unittest.TestCase):

    def test_read_read_item(self):
        print('\n---READ---')
        response = requests.get(starships)
        status_code = response.status_code
        header = response.headers
        print (f'Status code:\n{status_code}', f'Response json:\n{response.json()}', f'header:\n{header}', sep='\n\n')

        print('\nScan Data Types')
        for n in response.json():
            print(n, type(response.json()[n]))

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

        print('\n---READ ITEM---')
        searchship = 'USS Discovery'
        response = requests.get(f'{starships}/{searchship}')
        status_code = response.status_code
        header = response.headers
        print (f'Status code:\n{status_code}', f'Response json:\n{response.json()}', f'header:\n{header}', sep='\n\n')

        captain = response.json()['captain']
        assert captain == 'Michael Burnham', f"captain is {captain}"


    def test_create_delete(self):
        print('\n---CREATE---')
        new_starship = {'captain': 'Christopher Pike', 'century': 23, 'ship_name': 'USS Enterprise'}

        response = requests.post(starships, json=new_starship)
        status_code = response.status_code
        header = response.headers
        print (status_code, response.json(), header, sep='\n\n')


        captain = response.json()['captain']
        assert captain ==  'Christopher Pike' , f" captain is {captain}"
        ship_name = response.json()['ship_name']
        assert ship_name != '' , f" ship_name is {ship_name}"

        print('\n---READ---')
        response = requests.get(starships)
        status_code = response.status_code
        header = response.headers
        print (f'Status code:\n{status_code}', f'Response json:\n{response.json()}', f'header:\n{header}', sep='\n\n')

        print('\nScan Data Types')
        for n in response.json():
            print(n, type(response.json()[n]))

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

        print('\n---DELETE---')

        delete_ship = 'USS Enterprise'
        response = requests.delete(f'{starships}/{delete_ship}')
        status_code = response.status_code    
        print (status_code, response.json(), header, sep='\n\n')


        print('\n---READ---')


        response = requests.get(starships)
        status_code = response.status_code
        header = response.headers
        print (f'Status code:\n{status_code}', f'Response json:\n{response.json()}', f'header:\n{header}', sep='\n\n')

        print('\nScan Data Types')
        for n in response.json():
            print(n, type(response.json()[n]))

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

    


    def test_put_patch(self):
        print('---READ---')
        response = requests.get(starships)
        status_code = response.status_code
        header = response.headers

        print('Display memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

        print('\n---PUT---')

        update_starship = {'captain': 'SomeOneNew', 'century': 35, 'ship_name': 'USS Voyager'}
        update_ship_name = update_starship["ship_name"]
        headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
        response = requests.put(f'{starships}/{update_ship_name}', json=update_starship, headers=headers)
        status_code = response.status_code    
        print (status_code, response.json(), header, sep='\n')

        response = requests.get(starships)
        status_code = response.status_code    
        assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

        print('\n---PATCH---')

        update_starship = {'captain': 'Katheryn Janeway', 'ship_name': 'USS Voyager'}
        update_ship_name = update_starship["ship_name"]
        response = requests.put(f'{starships}/{update_ship_name}', json=update_starship)
        status_code = response.status_code    
        print (status_code, response.json(), header, sep='\n')


        response = requests.get(starships)
        status_code = response.status_code    
        assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])








    def test_usecase(self):
        newstarships = []
        response = requests.get(starships)
        status_code = response.status_code    
        assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"

        print('\nCreating New Ships'.upper())
        for n in range(5):
            captain = fake.name()
            shipname = fake.company()
            newstarships.append(shipname)

            new_starship = {'captain': captain, 'century': 23, 'ship_name': shipname}

            response = requests.post(starships, json=new_starship)
            status_code = response.status_code
            header = response.headers
            print (status_code, response.json(), sep=' : ')

            captain_resp = response.json()['captain']
            assert captain_resp == captain, f" Captain is {captain_resp}"
            ship_name = response.json()['ship_name']
            assert ship_name == shipname, f" Captain is {ship_name}"

        response = requests.get(starships)
        status_code = response.status_code    
        assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])

        print('\nDeleting Added Ships'.upper())

        for n in newstarships:
            print(n)
            response = requests.delete(f'{starships}/{n}')
            assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"


        response = requests.get(starships)
        status_code = response.status_code    
        assert response.status_code == 200, f" STATUS_CODE is {response.status_code}"

        print('\nDisplay memory_alpha_database'.upper())
        for n in response.json()['memory_alpha_database']:
            print(n, response.json()['memory_alpha_database'][n])








if __name__ == "__main__":
    suite = unittest.TestSuite(unittest.TestLoader().loadTestsFromTestCase(ST_API_Flask_test))
    HTMLTestRunner(log=True, verbosity=2, output='report_output', title='ST_API_Flask_test Report', report_name='reportname',
    open_in_browser=True, tested_by='EN_CODED', description="ST_API_Flask_test Report").run(suite)
