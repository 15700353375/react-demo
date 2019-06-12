// import App from './App';
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home'
import App from './App'
import Main from './view/main'
import Advanced from './view/advanced'
import TodoList from './view/todoList'
import Chess from './course/Chess'

// 核心概念
import LifeCircle from './view/main/lifeCircle'

const routes = [
  {
    path: '/',
    component: App,
    breadcrumbName:"home",
    indexRoute: { component: Home }, 
    childRoutes: [
      { path: 'main', breadcrumbName:"main", component: Main,
        childRoutes: [
          {
            path: 'lifeCircle', breadcrumbName:"lifeCircle", component: LifeCircle,
          }
        ]
      },
      { path: 'advanced', breadcrumbName:"advanced", component: Advanced},
      { path: 'todoList', breadcrumbName:"todoList", component: TodoList },
      {
        path: 'highLevel', breadcrumbName:"highLevel",
        childRoutes: [
          {
            path: 'chess', breadcrumbName:"chess", component: Chess,
          }
        ]
      }
    ]
  }
]

// const routes = [
//   {
//     path: 'index',
//     breadcrumbName: 'home',
//   },
//   {
//     path: 'first',
//     breadcrumbName: 'first',
//     children: [
//       {
//         path: '/general',
//         breadcrumbName: 'General',
//       },
//       {
//         path: '/layout',
//         breadcrumbName: 'Layout',
//       },
//       {
//         path: '/navigation',
//         breadcrumbName: 'Navigation',
//       },
//     ],
//   },
//   {
//     path: 'second',
//     breadcrumbName: 'second',
//   },
// ];

export default routes