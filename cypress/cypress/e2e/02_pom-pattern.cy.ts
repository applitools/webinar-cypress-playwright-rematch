import { loginPage } from '../support/page_objects/login'

it('visiting the login page', () => {

  loginPage
    .load()
    .login('filip', 'i<3slovakia!')

});

