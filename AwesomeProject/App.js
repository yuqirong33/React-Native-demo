/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { FlatList,Image, StyleSheet, Text, View } from "react-native";

//获取数据
var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";


export default class HelloWorldApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          loaded: false,
      };
      // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
      // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
      this.fetchData = this.fetchData.bind(this);
  }

  //在渲染前调用，在客户端也在服务器端
  componentWillMount(){
      console.log('--componentWillMount----')
  }

  //在渲染后调用，在客户端
  componentDidMount(){
      console.log('--componentDidMount----')
      this.fetchData();
  }

  //在组件接收到一个新的prop(更新后)时被调用这个方法在初始化render时不会被调用
  componentWillReceiveProps(nextProps){
      console.log('--componentWillReceiveProps----')
  }

  //返回一个布尔值在组件接收到新的prop或者state时被调用
  shouldComonentUpdate(nextProps,nextState){
    console.log('--shouldComonentUpdate----')
    return true;
  }

  //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
  componentWillUpdate(nextProps,nextState){
      console.log('--componentWillUpdate----')
  }

  //在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(nextProps,nextState){
      console.log('--componentDidUpdate----')
  }


  //在组件从DOM中移除的时候立刻被调用
  componentWillUnmount(){
      console.log('--componentWillUnmount----')
  }

  fetchData() {
      fetch(REQUEST_URL) //返回一个Promise对象
        .then((res) => {
            return res.json(); //res.json() 是一个Promise对象
        })
        .then((res) => {  //放获取到数据  loaded就为true  表示加载完毕
            this.setState({
                data: this.state.data.concat(res.movies),
                loaded: true,
            });
            console.log(this.state.data);
        });
  }

  render() { //渲染数据
      if (!this.state.loaded) { //如果正在加载的状态为false
          return this.renderLoadingView();  //那么执行函数  renderLoadingView()  渲染为正在加载
      }

      return (  //加载的状态为true的时候渲染FlatList列表组件 组件数据为data
          <FlatList
              data={this.state.data}
              renderItem={this.renderMovie} //循环列表  列表格式渲染为 renderMovie()函数
              style={styles.list}  //每一个list样式
          />
      );
  }

  renderLoadingView() {
      return (
          <View style={styles.container}>
              <Text>
                  正在加载电影数据……
              </Text>
          </View>
      );
  }

  renderMovie({ item }) {
      return (
          <View style={styles.container}>
              <Image
                  source={{uri: item.posters.thumbnail}}
                  style={styles.thumbnail}
              />
              <View style={styles.rightContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.year}>{item.year}</Text>
              </View>
          </View>
      );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    }
});



