import React, { Component } from 'react'

import { List, Skeleton, Checkbox } from 'antd';



export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
    };
  }
  

  deleteItem(index){
    this.props.deleteItem(index)
  }

  onChange(index){
    setTimeout(() => {
      this.props.deleteItem(index)
    }, 600);
  }


  render() {
    const { list } = this.props;
    return (
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item,index) => (
          <List.Item actions={[<a onClick={this.deleteItem.bind(this,index)}>delete</a>]} >
            <Skeleton avatar title={false} loading={item.loading} active>
            <Checkbox key={item.id} style={{float:'left', marginRight:10}} onChange={this.onChange.bind(this,index)}></Checkbox>
              <List.Item.Meta
                title={<a>{item.name}</a>}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}
