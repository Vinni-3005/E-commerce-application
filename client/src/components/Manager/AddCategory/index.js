/**
 *
 * AddCategory
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';
import ROLES from '../../../constants/index';
import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';

const AddCategory = props => {
  const {
    products,
    categoryFormData,
    formErrors,
    categoryChange,
    addCategory
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addCategory();
  };
  const isAuthorized = user.role == ROLES.Admin || user.role == ROLES.Merchant;

  return (
    <div className='add-category'>
      {isAuthorized ? (
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col xs='12'>
              <Input
                type={'text'}
                error={formErrors['name']}
                label={'Name'}
                name={'name'}
                placeholder={'Category Name'}
                value={categoryFormData.name}
                onInputChange={(name, value) => {
                  categoryChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'textarea'}
                error={formErrors['description']}
                label={'Description'}
                name={'description'}
                placeholder={'Category Description'}
                value={categoryFormData.description}
                onInputChange={(name, value) => {
                  categoryChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <SelectOption
                error={formErrors['products']}
                label={'Select Products'}
                multi={true}
                value={categoryFormData.products}
                options={products}
                handleSelectChange={value => {
                  categoryChange('products', value);
                }}
              />
            </Col>
            <Col xs='12' md='12' className='my-2'>
              <Switch
                id={'active-category'}
                name={'isActive'}
                label={'Active?'}
                checked={categoryFormData.isActive}
                toggleCheckboxChange={value => categoryChange('isActive', value)}
              />
            </Col>
          </Row>
          <hr />
          <div className='add-category-actions'>
            <Button type='submit' text='Add Category' />
          </div>
        </form>
      ) : (
        <p>You dont have permission to add category</p>
      )}
    </div>
  );
};

export default AddCategory;
