import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <TodoApp/>,
  document.getElementById('app')
);
