import React from 'react'
import './Icons.scss'

export const Facebook = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2V7.475c0-2.164,1.212-3.684,3.766-3.684l1.803,0.002v2.605
	h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z"/>
</svg>
)

export const GitHub = props => (
  <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path d="M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801 C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08
    c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2 C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301 c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301 C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369 c1.227-1.127,3.305-0.531,5.662-0.531c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531 c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799 c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z"/>
</svg>
)

export const Twitter = props => <svg className="icon" viewBox="0 0 20 20" width="20" height="20" {...props}>
    <path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697
	c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621
	c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047
	c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898
	C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773
	c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088
	c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z"/>
 </svg>

export const Dribbble = props => <svg className="icon" viewBox="0 0 24 24" width="24" height="24" {...props}>
  <path d="M13.626 9.504C14.139 10.469 14.58 11.467 14.96 12.491 16.501 12.19 18.08 12.032 19.692 12.032 20.74 12.032 22.328 12.162 23.484 12.303 23.566 9.437 22.606 6.801 20.895 4.714 18.714 6.748 16.263 8.368 13.626 9.504zM19.692 13.032C18.196 13.032 16.729 13.177 15.296 13.447 16.082 15.86 16.5 18.404 16.5 21 16.5 21.36 16.474 22.007 16.442 22.609 20.205 21.032 22.946 17.511 23.421 13.303 22.287 13.162 20.689 13.032 19.692 13.032zM.641 10.292C1.815 10.423 3.143 10.5 4 10.5 6.821 10.5 9.584 9.983 12.19 9.004 10.636 6.384 8.555 4.066 6.06 2.165 3.196 3.9 1.155 6.843.641 10.292zM15.42 22.983C15.46 22.298 15.5 21.421 15.5 21 15.5 18.475 15.085 16.002 14.311 13.657 10.31 14.598 6.613 16.611 3.386 19.602 5.493 21.987 8.566 23.5 12 23.5 13.191 23.5 14.34 23.319 15.42 22.983z" />
  <path d="M13.977 12.707C13.611 11.739 13.183 10.795 12.693 9.883 9.931 10.94 6.998 11.5 4 11.5 3.095 11.5 1.749 11.419.536 11.283.521 11.522.5 11.758.5 12 .5 14.557 1.345 16.911 2.756 18.821 6.072 15.761 9.868 13.691 13.977 12.707zM7.024 1.645C9.506 3.607 11.574 5.974 13.128 8.631 15.704 7.535 18.098 5.958 20.225 3.971 18.137 1.832 15.226.5 12 .5 10.215.5 8.532.919 7.024 1.645z" />
</svg>

export const Chain = props => <svg className="icon" viewBox="0 0 18 8" width="18" height="8" {...props}>
    <path d="M1.9,4 C1.9,2.84 2.84,1.9 4,1.9 L8,1.9 L8,0 L4,0 C1.79,0 0,1.79 0,4 C0,6.21 1.79,8 4,8 L8,8 L8,6.1 L4,6.1 C2.84,6.1 1.9,5.16 1.9,4 Z M14,0 L10,0 L10,1.9 L14,1.9 C15.16,1.9 16.1,2.84 16.1,4 C16.1,5.16 15.16,6.1 14,6.1 L10,6.1 L10,8 L14,8 C16.21,8 18,6.21 18,4 C18,1.79 16.21,0 14,0 Z M6,5 L12,5 L12,3 L6,3 L6,5 Z" />
  </svg>