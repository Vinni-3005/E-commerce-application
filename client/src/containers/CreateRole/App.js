/*import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import {addRole, fetchRoles, editRole, deleteRole} from './actions';
import actions from '../../actions';
import Page404 from '../../components/Common/Page404';
import CreateRole from './index';
import EditRole from './Edit';

class CreateRoles extends React.PureComponent  {
    render () {
        const {user} = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path='/create-role' component={CreateRole}/>
                    <Route exact path='/edit-role' component={EditRole}/>
                </Switch>
            </Router>       
        );
    }
}

const mapStateToProps = (state) => ( {
    user:state.account.user,
});

const mapDispatchToProps = {
    addRole,
    fetchRoles,
    editRole,
    deleteRole,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateRoles);
*/
