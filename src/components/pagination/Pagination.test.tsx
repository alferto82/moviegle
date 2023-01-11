import React from 'react';
import { mount } from 'enzyme';
import { Pagination, Props } from './Pagination';


describe('<Pagination />', () => {
  it('renders the component from the beginning', () => {
    const mockProps: Props = {
      page: 1,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);

    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);

    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);

    wrapper.find('button').at(2).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(3);

    wrapper.find('button').at(3).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(5);

    wrapper.find('button').at(4).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);

    expect(wrapper.render()).toMatchSnapshot();
  });

it('renders the component from the end', () => {
    const mockProps: Props = {
      page: 5,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);

    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(4);

    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);

    wrapper.find('button').at(2).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(3);

    wrapper.find('button').at(3).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(4);

    wrapper.find('button').at(4).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(5);

expect(wrapper.render()).toMatchSnapshot();
  });

it('renders the component from the middle', () => {
    const mockProps: Props = {
      page: 3,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const wrapper = mount(<Pagination {...mockProps} />);

    wrapper.find('button').at(0).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);

    wrapper.find('button').at(1).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(1);

    wrapper.find('button').at(2).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(2);

    wrapper.find('button').at(3).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(3);

    wrapper.find('button').at(4).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(4);

    wrapper.find('button').at(5).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(5);

    wrapper.find('button').at(6).simulate('click');
    expect(mockProps.handlePagination).toBeCalledWith(4);

    expect(wrapper.render()).toMatchSnapshot();
  });
});