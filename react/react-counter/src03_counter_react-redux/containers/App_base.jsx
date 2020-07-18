import React from 'react'
import {connect} from 'react-redux'

import Counter from '../components/Counter'
import {increment, decrement} from '../redux/actions'


/**
 * 容器组件：通过connect包装UI组件产生组件
 * connect()：高阶函数
 * connect()返回的函数是一个高阶组件：接收一个UI组件，生成一个容器组件
 * 容器组件的责任：向UI组件传入特定的属性
*/

// 用来将redux管理的state数据映射成UI组件的一般属性的函数(属性值的来源就是store中的state)
function mapStateToProps(state) {
    return {
        count: state
    }
}

// 用来将包含dispatch代码的函数映射成UI组件的函数属性的函数
// 如果是函数，会自动调用得到对象，将对象中的方法作为函数属性传入UI组件
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => dispatch(increment(number)),
        decrement: (number) => dispatch(decrement(number))
    }
}
// 如果是对象, 将对象中的方法包装成一个新函数, 并传入UI组件

export default connect (
    mapStateToProps,  // 指一般属性
    mapDispatchToProps,  // 指定函数属性
)(Counter)