import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      value: '',
      desc: '在这里写描述',
      selected: ['lime'],
      isGoing: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange= this.handleChange.bind(this)
    this.handleAreaChange = this.handleAreaChange.bind(this)
    this.handleSelectChange= this.handleSelectChange.bind(this)
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  handleAreaChange(event){
    this.setState({desc: event.target.value})
  }

  handleSelectChange(event){
    console.log(this.state.selected)
    // 多选情况注意去重或者再次点击时取消
    this.setState({selected: [...this.state.selected,event.target.value]})
  }


  handleSubmit(event){
    console.log(this.state)
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input name='value' type='text' value={this.state.value} onChange={this.handleChange}/>
          </label> <br/>
          <label>
            描述：
            <textarea name='desc' value={this.state.desc} onChange={this.handleChange} />
          </label> <br/>
          <label>
            参与:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleChange} />
          </label> <br/>
          <label>
            选择你喜欢的风味:
            <select value={this.state.selected} multiple={true} onChange={this.handleSelectChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">柠檬</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label> <br/>

          <label>
            上传文件：<input type="file" />
          </label> <br/>
          <input type='submit' value='提交' />
        </form>
      </div>
    )
  }
}
