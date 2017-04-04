import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <p>Hello there, this is working!</p>,
  document.getElementById('app')
);
