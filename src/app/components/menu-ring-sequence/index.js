'use strict';

import React from 'react';
import classnames from 'classnames';
import SVGSequenceAnimation from 'app/lib/svg-sequence-animation';

const MenuRingSequence = React.createClass({

  mixins: [SVGSequenceAnimation()],

  render() {
    const classes = classnames('menu-ring-sequence', this.props.customClass);

    return (
      <div className={classes} style={this.props.customStyles}>
        <svg ref="animsvg" title="menu ring sequence" role="img" viewBox="0 0 46 46">
          <g id="Frame1">
          	<g>
          		<path d="M8.03,26.055c-2.131,2.086-4.243,4.146-5.307,6.985c-1.031,2.75,0.306,4.909,3.248,5.072
          			c1.68,0.093,3.458,0.036,5.063-0.414c11.918-3.336,22.156-9.577,30.85-18.339c1.208-1.217,2.205-2.737,2.972-4.28
          			c1.657-3.33,0.038-5.799-3.684-5.876c-1.556-0.032-2.369,0.883-2.249,2.607c0.774-0.044,1.556-0.154,2.33-0.118
          			c1.786,0.084,2.264,0.855,1.454,2.427c-0.453,0.879-0.991,1.765-1.679,2.463c-1.896,1.924-3.767,3.904-5.868,5.588
          			c-7.268,5.825-15.227,10.43-24.238,13.026c-1.267,0.365-2.608,0.579-3.925,0.637c-2.084,0.093-2.628-0.794-1.635-2.592
          			c0.558-1.012,1.185-2.053,2.014-2.833C8.714,29.151,9.257,27.889,8.03,26.055z"/>
          		<path d="M8.03,26.055c1.227,1.834,0.684,3.096-0.653,4.354c-0.829,0.78-1.456,1.821-2.014,2.833
          			c-0.992,1.798-0.448,2.685,1.635,2.592c1.317-0.059,2.658-0.272,3.925-0.637c9.011-2.596,16.97-7.2,24.238-13.026
          			c2.101-1.684,3.972-3.664,5.868-5.588c0.688-0.698,1.225-1.584,1.679-2.463c0.81-1.572,0.332-2.343-1.454-2.427
          			c-0.774-0.036-1.556,0.074-2.33,0.118c-0.121-1.724,0.693-2.64,2.249-2.607c3.723,0.077,5.341,2.546,3.684,5.876
          			c-0.768,1.542-1.764,3.062-2.972,4.28c-8.694,8.762-18.932,15.003-30.85,18.339c-1.605,0.449-3.383,0.507-5.063,0.414
          			c-2.942-0.163-4.279-2.322-3.248-5.072C3.787,30.201,5.899,28.141,8.03,26.055z"/>
          	</g>
          </g>
          <g id="Frame2">
          	<g>
          		<path d="M8.108,26.172c-1.949,1.34-4.683,4.816-5.398,6.861c-0.969,2.772,0.318,4.971,3.255,5.064
          			c2.046,0.065,4.175-0.145,6.151-0.671c7.488-1.993,14.116-5.81,20.462-10.139c3.791-2.587,7.426-5.397,10.257-9.052
          			c1.048-1.353,1.819-2.96,2.487-4.548c0.245-0.583,0.073-1.805-0.346-2.09c-0.576-0.391-1.568-0.166-2.382-0.206
          			c-0.045,0.118-0.089,0.236-0.134,0.354c0.97,0.867,0.652,1.77,0.138,2.622c-0.471,0.781-0.942,1.598-1.578,2.235
          			c-1.907,1.912-3.771,3.898-5.871,5.581c-7.267,5.821-15.224,10.424-24.232,13.015c-1.305,0.375-2.691,0.582-4.048,0.634
          			c-1.92,0.073-2.463-0.818-1.56-2.483c0.571-1.051,1.218-2.13,2.073-2.941C8.713,29.144,9.253,27.887,8.108,26.172z"/>
          		<path d="M8.108,26.172c1.144,1.715,0.605,2.972-0.729,4.236c-0.855,0.811-1.502,1.89-2.073,2.941
          			c-0.904,1.664-0.36,2.556,1.56,2.483c1.357-0.052,2.743-0.259,4.048-0.634c9.009-2.591,16.965-7.194,24.232-13.015
          			c2.101-1.683,3.965-3.668,5.871-5.581c0.635-0.637,1.107-1.455,1.578-2.235c0.514-0.852,0.832-1.755-0.138-2.622
          			c0.045-0.118,0.089-0.236,0.134-0.354c0.814,0.039,1.807-0.185,2.382,0.206c0.42,0.285,0.591,1.507,0.346,2.09
          			c-0.668,1.588-1.439,3.195-2.487,4.548c-2.831,3.655-6.466,6.466-10.257,9.052c-6.345,4.329-12.973,8.146-20.462,10.139
          			c-1.975,0.526-4.105,0.735-6.151,0.671c-2.937-0.093-4.225-2.292-3.255-5.064C3.425,30.988,6.159,27.512,8.108,26.172z"/>
          	</g>
          </g>
          <g id="Frame3_2_">
          	<g>
          		<path d="M42.828,14.189c-0.586,0.796-1.141,1.623-1.771,2.387c-0.635,0.769-1.303,1.521-2.029,2.203
          			c-7.72,7.262-16.598,12.625-26.642,15.996c-1.827,0.613-3.807,0.894-5.737,1.034c-1.674,0.122-2.26-0.872-1.401-2.312
          			c0.909-1.523,2.114-2.867,3.159-4.311c0.218-0.301,0.469-0.725,0.416-1.044c-0.112-0.675-0.414-1.319-0.707-2.178
          			c-2.256,2.231-4.445,4.326-5.458,7.286c-0.888,2.592,0.42,4.732,3.16,4.831c2.087,0.075,4.27-0.1,6.276-0.651
          			c8.63-2.373,16.182-6.895,23.298-12.191c3.182-2.368,6.148-4.985,8.438-8.273C44.788,15.589,44.509,14.847,42.828,14.189z"/>
          		<path d="M42.828,14.189c1.681,0.657,1.96,1.4,1.001,2.776c-2.29,3.287-5.256,5.905-8.438,8.273
          			c-7.116,5.296-14.668,9.818-23.298,12.191c-2.006,0.552-4.189,0.726-6.276,0.651c-2.74-0.099-4.048-2.238-3.16-4.831
          			c1.013-2.959,3.202-5.054,5.458-7.286c0.293,0.859,0.596,1.503,0.707,2.178c0.053,0.319-0.198,0.743-0.416,1.044
          			c-1.045,1.444-2.25,2.788-3.159,4.311c-0.86,1.44-0.273,2.434,1.401,2.312c1.931-0.14,3.911-0.421,5.737-1.034
          			c10.044-3.371,18.923-8.734,26.642-15.996c0.726-0.683,1.394-1.434,2.029-2.203C41.687,15.812,42.242,14.986,42.828,14.189z"/>
          	</g>
          </g>
          <g id="Frame4">
          	<g>
          		<path d="M37.575,20.304c-0.15,0.069-0.237,0.09-0.299,0.14c-0.257,0.211-0.504,0.434-0.76,0.647
          			c-7.165,5.963-15.048,10.686-23.933,13.597c-1.91,0.626-3.962,0.942-5.972,1.101c-1.605,0.128-2.193-0.864-1.38-2.24
          			c0.902-1.526,2.102-2.873,3.137-4.323c0.237-0.331,0.503-0.789,0.453-1.146c-0.095-0.67-0.412-1.309-0.693-2.124
          			c-2.27,2.243-4.47,4.345-5.468,7.321c-0.852,2.54,0.424,4.612,3.09,4.791c1.758,0.118,3.614,0.048,5.309-0.389
          			c10.145-2.62,18.842-7.99,26.895-14.514C38.923,22.381,38.759,21.416,37.575,20.304z"/>
          		<path d="M37.575,20.304c1.184,1.112,1.348,2.077,0.381,2.861c-8.053,6.524-16.75,11.895-26.895,14.514
          			c-1.695,0.438-3.552,0.508-5.309,0.389c-2.666-0.179-3.942-2.251-3.09-4.791c0.998-2.976,3.198-5.078,5.468-7.321
          			c0.281,0.816,0.598,1.454,0.693,2.124c0.051,0.357-0.216,0.815-0.453,1.146c-1.035,1.45-2.235,2.798-3.137,4.323
          			c-0.814,1.376-0.225,2.368,1.38,2.24c2.01-0.16,4.062-0.476,5.972-1.101c8.885-2.911,16.768-7.634,23.933-13.597
          			c0.256-0.213,0.502-0.436,0.76-0.647C37.338,20.394,37.424,20.373,37.575,20.304z"/>
          	</g>
          </g>
          <g id="Frame5">
          	<g>
          		<path d="M8.123,25.968c-2.192,2.146-4.247,4.159-5.332,6.903c-1.135,2.874,0.179,5.074,3.247,5.251
          			c1.6,0.093,3.27,0.001,4.826-0.363c7.398-1.732,13.921-5.388,20.24-9.46c0.938-0.605,0.44-1.288,0.102-1.944
          			c-0.42-0.814-0.936-0.534-1.52-0.145c-5.358,3.561-10.997,6.579-17.152,8.515c-1.808,0.569-3.717,0.934-5.605,1.093
          			c-1.989,0.167-2.593-0.824-1.58-2.516c0.869-1.451,2.038-2.719,3.034-4.097c0.234-0.325,0.46-0.791,0.411-1.155
          			C8.708,27.414,8.407,26.805,8.123,25.968z"/>
          		<path d="M8.123,25.968c0.284,0.838,0.585,1.446,0.67,2.083c0.049,0.364-0.177,0.83-0.411,1.155
          			c-0.995,1.379-2.165,2.647-3.034,4.097c-1.013,1.691-0.409,2.683,1.58,2.516c1.888-0.159,3.797-0.524,5.605-1.093
          			c6.154-1.936,11.794-4.954,17.152-8.515c0.585-0.389,1.101-0.669,1.52,0.145c0.338,0.656,0.836,1.339-0.102,1.944
          			c-6.318,4.072-12.842,7.728-20.24,9.46c-1.555,0.364-3.226,0.456-4.826,0.363c-3.067-0.177-4.382-2.377-3.247-5.251
          			C3.876,30.127,5.931,28.114,8.123,25.968z"/>
          	</g>
          </g>
          <g id="Frame6">
          	<g>
          		<path d="M8.133,25.954C5.812,28.262,3.54,30.39,2.598,33.49c-0.723,2.378,0.487,4.305,2.973,4.587
          			c1.387,0.157,2.848,0.135,4.218-0.12c6.865-1.276,12.9-4.539,18.818-8.058c0.901-0.536,0.568-1.161,0.241-1.804
          			c-0.388-0.762-0.862-0.785-1.601-0.327c-4.647,2.877-9.496,5.365-14.736,6.964c-1.89,0.577-3.886,0.924-5.857,1.077
          			c-1.675,0.13-2.266-0.868-1.408-2.307c0.908-1.523,2.132-2.855,3.146-4.321c0.252-0.364,0.339-0.931,0.297-1.386
          			C8.639,27.242,8.373,26.708,8.133,25.954z"/>
          		<path d="M8.133,25.954c0.24,0.753,0.506,1.287,0.556,1.841c0.041,0.455-0.046,1.022-0.297,1.386
          			c-1.014,1.465-2.238,2.797-3.146,4.321c-0.858,1.439-0.268,2.437,1.408,2.307c1.971-0.153,3.967-0.501,5.857-1.077
          			c5.24-1.599,10.089-4.088,14.736-6.964c0.739-0.457,1.213-0.435,1.601,0.327c0.328,0.643,0.66,1.268-0.241,1.804
          			c-5.918,3.52-11.952,6.783-18.818,8.058c-1.37,0.254-2.831,0.277-4.218,0.12c-2.485-0.281-3.696-2.209-2.973-4.587
          			C3.54,30.39,5.812,28.262,8.133,25.954z"/>
          	</g>
          </g>
          <g id="Frame7">
          	<g>
          		<path d="M8.056,25.944c-0.768,0.812-1.463,1.511-2.118,2.247c-1.441,1.62-2.825,3.285-3.394,5.448
          			c-0.556,2.116,0.332,3.765,2.449,4.301c0.948,0.24,1.981,0.305,2.959,0.233c4.949-0.361,9.37-2.391,13.786-4.444
          			c1.006-0.468,0.979-1.065,0.6-1.894c-0.409-0.896-0.966-0.724-1.722-0.418c-3.226,1.31-6.448,2.642-9.739,3.768
          			c-1.383,0.473-2.933,0.6-4.41,0.621c-1.485,0.022-1.987-0.833-1.302-2.136c0.632-1.202,1.336-2.464,2.318-3.36
          			c1.307-1.193,1.579-2.364,0.84-3.88C8.287,26.359,8.246,26.29,8.056,25.944z"/>
          		<path d="M8.056,25.944c0.19,0.346,0.232,0.415,0.267,0.488c0.739,1.515,0.467,2.687-0.84,3.88
          			c-0.982,0.896-1.686,2.158-2.318,3.36c-0.685,1.302-0.183,2.157,1.302,2.136c1.478-0.021,3.027-0.148,4.41-0.621
          			c3.291-1.126,6.513-2.459,9.739-3.768c0.756-0.307,1.313-0.478,1.722,0.418c0.379,0.828,0.406,1.426-0.6,1.894
          			c-4.416,2.053-8.837,4.083-13.786,4.444c-0.979,0.071-2.012,0.007-2.959-0.233c-2.117-0.536-3.005-2.185-2.449-4.301
          			c0.569-2.163,1.953-3.827,3.394-5.448C6.593,27.455,7.288,26.756,8.056,25.944z"/>
          	</g>
          </g>
          <g id="Frame8">
          	<g>
          		<path d="M8.123,25.968c-2.191,2.145-4.245,4.157-5.33,6.9c-1.137,2.874,0.179,4.99,3.235,5.29
          			c2.755,0.271,5.357-0.438,7.958-1.219c0.886-0.266,1.298-0.612,0.947-1.58c-0.341-0.939-0.827-1.086-1.813-0.822
          			c-2.076,0.555-4.193,1.066-6.324,1.275c-1.823,0.179-2.435-0.846-1.506-2.402c0.887-1.487,2.077-2.791,3.093-4.205
          			c0.234-0.325,0.459-0.791,0.41-1.154C8.708,27.413,8.407,26.805,8.123,25.968z"/>
          		<path d="M8.123,25.968c0.284,0.837,0.585,1.446,0.67,2.083c0.049,0.364-0.176,0.829-0.41,1.154
          			c-1.016,1.414-2.206,2.718-3.093,4.205c-0.928,1.557-0.317,2.582,1.506,2.402c2.131-0.21,4.248-0.72,6.324-1.275
          			c0.986-0.264,1.472-0.117,1.813,0.822c0.352,0.968-0.061,1.314-0.947,1.58c-2.601,0.781-5.203,1.489-7.958,1.219
          			c-3.056-0.3-4.372-2.416-3.235-5.29C3.878,30.125,5.932,28.113,8.123,25.968z"/>
          	</g>
          </g>
          <g id="Frame9">
          	<g>
          		<path d="M8.134,25.954c-2.297,2.266-4.518,4.378-5.502,7.397c-0.826,2.532,0.474,4.593,3.157,4.734
          			c1.88,0.099,3.784-0.281,5.678-0.445c0.809-0.07,1.114-0.509,0.869-1.269c-0.23-0.714-0.403-1.416-1.522-1.147
          			c-1.363,0.327-2.776,0.569-4.173,0.598c-1.681,0.035-2.251-0.889-1.39-2.33c0.908-1.52,2.13-2.85,3.143-4.312
          			c0.251-0.363,0.338-0.929,0.296-1.384C8.639,27.243,8.374,26.709,8.134,25.954z"/>
          		<path d="M8.134,25.954c0.24,0.755,0.505,1.289,0.555,1.842c0.041,0.454-0.045,1.021-0.296,1.384
          			c-1.013,1.463-2.235,2.792-3.143,4.312c-0.861,1.441-0.29,2.365,1.39,2.33c1.397-0.029,2.81-0.271,4.173-0.598
          			c1.119-0.268,1.292,0.433,1.522,1.147c0.245,0.76-0.06,1.199-0.869,1.269c-1.894,0.164-3.798,0.543-5.678,0.445
          			c-2.683-0.141-3.982-2.202-3.157-4.734C3.616,30.333,5.837,28.22,8.134,25.954z"/>
          	</g>
          </g>
          <g id="Frame10">
          	<g>
          		<path d="M8.099,25.987c-2.296,2.289-4.575,4.421-5.509,7.53c-0.665,2.211,0.321,3.902,2.513,4.492
          			c1.596,0.43,2.611-0.329,2.742-2.1c-0.328-0.015-0.655-0.032-0.982-0.046c-2.002-0.084-2.483-0.858-1.496-2.629
          			c0.582-1.045,1.218-2.15,2.1-2.918c1.331-1.16,1.617-2.35,0.86-3.874C8.29,26.37,8.253,26.297,8.099,25.987z"/>
          		<path d="M8.099,25.987c0.154,0.31,0.19,0.383,0.227,0.456c0.757,1.524,0.471,2.714-0.86,3.874c-0.881,0.769-1.517,1.873-2.1,2.918
          			c-0.987,1.771-0.506,2.545,1.496,2.629c0.327,0.014,0.654,0.03,0.982,0.046c-0.131,1.771-1.145,2.53-2.742,2.1
          			c-2.193-0.59-3.178-2.281-2.513-4.492C3.525,30.408,5.803,28.276,8.099,25.987z"/>
          	</g>
          </g>
          <g id="Frame11">
          	<g>
          		<path d="M6.647,36.046c-2.042-0.82-2.265-1.328-1.081-3.179c0.822-1.285,1.886-2.413,2.799-3.642
          			c0.24-0.323,0.49-0.789,0.437-1.145c-0.098-0.667-0.415-1.302-0.689-2.089c-2.088,1.994-4.004,3.941-5.152,6.479
          			c-0.332,0.735-0.523,1.589-0.546,2.395c-0.029,1.026,0.285,2.044,1.458,2.33C5.021,37.476,5.978,37.092,6.647,36.046z"/>
          		<path d="M6.647,36.046c-0.669,1.046-1.626,1.43-2.774,1.15c-1.173-0.286-1.487-1.305-1.458-2.33
          			c0.023-0.806,0.213-1.66,0.546-2.395c1.148-2.538,3.064-4.485,5.152-6.479c0.274,0.787,0.59,1.422,0.689,2.089
          			c0.053,0.356-0.198,0.822-0.437,1.145c-0.913,1.23-1.977,2.358-2.799,3.642C4.382,34.719,4.605,35.226,6.647,36.046z"/>
          	</g>
          </g>
          <g id="Frame12">
          	<g>
          		<path d="M8.15,25.955c-2.113,2.026-3.99,3.953-5.171,6.431c-0.824,1.729-0.227,2.498,1.807,2.354
          			c0.556-2.208,2.045-3.835,3.553-5.433c0.485-0.514,0.714-0.938,0.352-1.625C8.449,27.223,8.369,26.68,8.15,25.955z"/>
          		<path d="M8.15,25.955c0.219,0.725,0.3,1.268,0.541,1.727c0.362,0.687,0.133,1.111-0.352,1.625
          			c-1.508,1.598-2.997,3.225-3.553,5.433c-2.034,0.145-2.63-0.624-1.807-2.354C4.16,29.908,6.037,27.981,8.15,25.955z"/>
          	</g>
          </g>
          <g id="Frame13">
          	<g>
          		<path d="M7.943,25.777c-1.627,2.089-3.123,4.001-4.61,5.921c-0.535,0.691-0.348,1.227,0.412,1.58
          			c0.648,0.302,1.237,0.626,1.765-0.315c0.543-0.969,1.15-1.995,1.985-2.687C8.989,29.041,9.029,27.745,7.943,25.777z M32.321,11.15
          			c0.343,0.317,0.521,0.486,0.704,0.65c0.456,0.407,0.859,0.969,1.393,1.159c0.341,0.121,1.197-0.234,1.262-0.508
          			c0.127-0.536-0.034-1.217-0.291-1.73c-0.111-0.222-0.777-0.293-1.153-0.226C33.639,10.601,33.074,10.881,32.321,11.15z"/>
          		<path d="M7.943,25.777c1.085,1.968,1.046,3.264-0.448,4.5c-0.835,0.691-1.442,1.718-1.985,2.687
          			c-0.528,0.941-1.116,0.617-1.765,0.315c-0.76-0.354-0.947-0.889-0.412-1.58C4.821,29.778,6.316,27.865,7.943,25.777z"/>
          		<path d="M32.321,11.15c0.753-0.269,1.318-0.549,1.914-0.656c0.377-0.067,1.042,0.004,1.153,0.226
          			c0.257,0.513,0.418,1.194,0.291,1.73c-0.065,0.274-0.92,0.63-1.262,0.508c-0.534-0.19-0.937-0.752-1.393-1.159
          			C32.841,11.637,32.663,11.467,32.321,11.15z"/>
          	</g>
          </g>
          <g id="Frame14">
          	<g>
          		<path d="M43.059,12.2c0.497-2.126-0.148-2.994-2.152-2.998c-0.743-0.002-1.506,0.03-2.225,0.196
          			c-2.094,0.482-4.17,1.04-6.247,1.566c1.071,1.999,2.435,2.292,4.131,1.439c0.253-0.127,0.554-0.173,0.839-0.221
          			C39.264,11.87,41.123,11.222,43.059,12.2z M8.039,25.715c-0.593,0.733-0.975,1.221-1.375,1.695
          			c-0.24,0.284-0.555,0.516-0.747,0.826c-0.152,0.246-0.321,0.753-0.22,0.839c0.502,0.432,1.052,0.948,1.66,1.076
          			c0.533,0.112,1.616-1.615,1.46-2.126C8.625,27.404,8.403,26.792,8.039,25.715z"/>
          		<path d="M43.059,12.2c-1.936-0.978-3.795-0.331-5.655-0.018c-0.285,0.048-0.586,0.093-0.839,0.221
          			c-1.697,0.853-3.061,0.56-4.131-1.439c2.078-0.527,4.154-1.084,6.247-1.566c0.719-0.166,1.482-0.198,2.225-0.196
          			C42.911,9.206,43.556,10.074,43.059,12.2z"/>
          		<path d="M8.039,25.715c0.364,1.077,0.586,1.689,0.776,2.311c0.156,0.511-0.927,2.238-1.46,2.126
          			c-0.608-0.128-1.158-0.644-1.66-1.076c-0.101-0.087,0.068-0.593,0.22-0.839c0.192-0.311,0.507-0.542,0.747-0.826
          			C7.063,26.936,7.446,26.448,8.039,25.715z"/>
          	</g>
          </g>
          <g id="Frame15">
          	<g>
          		<path d="M32.296,11.125c0.437,0.406,0.733,0.594,0.912,0.861c0.7,1.046,1.547,1.001,2.658,0.657
          			c1.458-0.452,2.983-0.748,4.502-0.925c2.489-0.29,3.022,0.42,2.243,2.741c-0.025,0.074-0.003,0.163,0,0.245
          			c1.64,0.882,2.52,0.486,2.811-1.266c0.357-2.144-0.756-3.703-3.006-4.068C38.913,8.802,35.713,9.999,32.296,11.125z"/>
          		<path d="M32.296,11.125c3.416-1.125,6.617-2.323,10.12-1.755c2.249,0.365,3.362,1.924,3.006,4.068
          			c-0.292,1.752-1.171,2.148-2.813,1.266c-0.002-0.082-0.023-0.171,0.002-0.245c0.778-2.321,0.246-3.032-2.243-2.741
          			c-1.518,0.177-3.044,0.473-4.502,0.925c-1.11,0.344-1.958,0.389-2.658-0.657C33.029,11.719,32.733,11.53,32.296,11.125z"/>
          	</g>
          </g>
          <g id="Frame16">
          	<g>
          		<path d="M37.496,20.418c0.629,0.814,1.461,1.74,2.349,0.973c2.398-2.07,4.585-4.402,5.492-7.562
          			c0.622-2.166-0.396-3.921-2.532-4.376c-3.653-0.778-6.986,0.518-10.321,1.607c1.011,1.865,2.359,2.218,4.073,1.346
          			c0.289-0.147,0.636-0.215,0.963-0.245c1.478-0.137,2.96-0.347,4.439-0.332c0.985,0.01,1.404,0.752,0.981,1.677
          			c-0.41,0.898-0.871,1.811-1.494,2.565C40.232,17.539,38.888,18.901,37.496,20.418z"/>
          		<path d="M37.496,20.418c1.392-1.517,2.736-2.879,3.951-4.348c0.623-0.754,1.084-1.667,1.494-2.565
          			c0.422-0.924,0.004-1.666-0.981-1.677c-1.478-0.015-2.96,0.195-4.439,0.332c-0.327,0.03-0.674,0.098-0.963,0.245
          			c-1.714,0.873-3.063,0.519-4.073-1.346c3.335-1.089,6.668-2.385,10.321-1.607c2.136,0.455,3.154,2.21,2.532,4.376
          			c-0.907,3.159-3.095,5.492-5.492,7.562C38.957,22.158,38.125,21.232,37.496,20.418z"/>
          	</g>
          </g>
          <g id="Frame17">
          	<g>
          		<path d="M33.41,23.679c1.015,1.422,2.04,1.658,3.225,0.572c2.144-1.965,4.301-3.936,6.243-6.093
          			c1.03-1.143,1.814-2.61,2.362-4.061c0.871-2.305-0.295-4.271-2.646-4.695c-3.577-0.644-6.85,0.568-10.289,1.728
          			c0.372,0.346,0.625,0.514,0.788,0.745c0.755,1.065,1.626,1.163,2.87,0.757c1.526-0.499,3.155-0.757,4.76-0.91
          			c0.704-0.067,1.777,0.172,2.096,0.657c0.3,0.458-0.127,1.433-0.32,2.158c-0.092,0.344-0.345,0.672-0.595,0.944
          			c-1.46,1.594-2.883,3.227-4.43,4.732C36.198,21.453,34.767,22.533,33.41,23.679z"/>
          		<path d="M33.41,23.679c1.357-1.147,2.788-2.227,4.063-3.467c1.547-1.505,2.971-3.138,4.43-4.732
          			c0.249-0.272,0.503-0.6,0.595-0.944c0.194-0.724,0.621-1.7,0.32-2.158c-0.318-0.485-1.392-0.724-2.096-0.657
          			c-1.604,0.153-3.233,0.411-4.76,0.91c-1.244,0.407-2.115,0.308-2.87-0.757c-0.163-0.231-0.415-0.398-0.788-0.745
          			c3.439-1.16,6.711-2.372,10.289-1.728c2.352,0.424,3.517,2.39,2.646,4.695c-0.548,1.451-1.333,2.918-2.362,4.061
          			c-1.942,2.157-4.099,4.128-6.243,6.093C35.45,25.338,34.425,25.102,33.41,23.679z"/>
          	</g>
          </g>
          <g id="Frame18">
          	<g>
          		<path d="M32.483,11.064c1.009,1.829,2.343,2.233,4.067,1.344c0.288-0.148,0.636-0.215,0.963-0.245
          			c1.479-0.138,2.962-0.349,4.442-0.335c0.984,0.009,1.362,0.724,0.999,1.68c-0.19,0.502-0.368,1.051-0.707,1.446
          			c-1.459,1.701-2.848,3.492-4.494,4.996c-6.138,5.606-13.155,9.864-20.77,13.161c-0.441,0.191-0.874,0.402-1.301,0.6
          			c0.702,1.792,1.409,2.124,2.99,1.419c6.413-2.856,12.417-6.419,17.872-10.831c2.252-1.822,4.313-3.912,6.269-6.055
          			c1.01-1.107,1.784-2.523,2.343-3.928c1.034-2.594-0.194-4.572-2.943-4.973C38.793,8.845,35.665,10.015,32.483,11.064z"/>
          		<path d="M32.483,11.064c3.182-1.049,6.311-2.219,9.731-1.721c2.748,0.4,3.977,2.378,2.943,4.973
          			c-0.56,1.404-1.333,2.821-2.343,3.928c-1.956,2.143-4.017,4.234-6.269,6.055c-5.455,4.412-11.459,7.975-17.872,10.831
          			c-1.582,0.704-2.289,0.373-2.99-1.419c0.428-0.198,0.86-0.409,1.301-0.6c7.615-3.297,14.632-7.555,20.77-13.161
          			c1.647-1.504,3.035-3.295,4.494-4.996c0.339-0.395,0.517-0.944,0.707-1.446c0.363-0.957-0.016-1.671-0.999-1.68
          			c-1.48-0.014-2.962,0.197-4.442,0.335c-0.327,0.03-0.676,0.097-0.963,0.245C34.825,13.298,33.491,12.893,32.483,11.064z"/>
          	</g>
          </g>
          <g id="Frame19">
          	<g>
          		<path d="M32.417,11.088c1.057,1.503,2.107,2.142,3.98,1.429c1.586-0.603,3.412-0.727,5.139-0.763
          			c1.494-0.031,1.882,0.793,1.28,2.175c-0.231,0.529-0.52,1.054-0.881,1.502c-0.86,1.068-1.688,2.187-2.687,3.114
          			C30.449,26.707,20.53,32.9,8.709,35.673c-1.042,0.244-0.871,0.932-0.826,1.627c0.051,0.793,0.554,0.942,1.222,0.806
          			c1.018-0.208,2.05-0.368,3.046-0.652c8.572-2.439,16.11-6.899,23.151-12.204c2.705-2.038,5.12-4.501,7.464-6.963
          			c1.083-1.138,1.884-2.66,2.453-4.146c0.944-2.462-0.323-4.398-2.946-4.79C38.811,8.834,35.648,10.013,32.417,11.088z"/>
          		<path d="M32.417,11.088c3.231-1.076,6.394-2.254,9.858-1.737c2.622,0.392,3.889,2.329,2.946,4.79
          			c-0.569,1.486-1.37,3.008-2.453,4.146c-2.345,2.462-4.759,4.924-7.464,6.963c-7.041,5.305-14.579,9.765-23.151,12.204
          			c-0.997,0.284-2.029,0.444-3.046,0.652c-0.668,0.136-1.171-0.013-1.222-0.806c-0.045-0.696-0.216-1.383,0.826-1.627
          			c11.821-2.773,21.74-8.965,30.537-17.127c0.999-0.927,1.827-2.046,2.687-3.114c0.361-0.448,0.65-0.973,0.881-1.502
          			c0.602-1.382,0.214-2.206-1.28-2.175c-1.726,0.036-3.553,0.16-5.139,0.763C34.524,13.23,33.473,12.592,32.417,11.088z"/>
          	</g>
          </g>
          <g id="Frame20">
          	<g>
          		<path d="M32.291,11.126c0.401,0.369,0.661,0.533,0.818,0.766c0.752,1.112,1.654,1.093,2.875,0.735
          			c1.661-0.487,3.408-0.811,5.135-0.909c1.914-0.108,2.421,0.816,1.538,2.503c-0.421,0.804-0.907,1.621-1.539,2.259
          			c-1.93,1.949-3.821,3.968-5.949,5.685c-7.021,5.664-14.741,10.118-23.399,12.801c-2.049,0.635-4.144,1.317-6.359,0.637
          			c-0.18-0.055-0.542,0.144-0.675,0.329c-0.791,1.097-0.39,2.184,0.934,2.15c2.144-0.054,4.362-0.086,6.405-0.649
          			c9.089-2.508,17.001-7.331,24.369-13.061c2.317-1.802,4.383-3.962,6.373-6.133c1.013-1.105,1.784-2.525,2.343-3.931
          			c1.032-2.595-0.201-4.568-2.957-4.967C38.779,8.846,35.651,10.022,32.291,11.126z"/>
          		<path d="M32.291,11.126c3.36-1.105,6.487-2.281,9.91-1.785c2.756,0.399,3.989,2.372,2.957,4.967
          			c-0.559,1.406-1.33,2.826-2.343,3.931c-1.99,2.171-4.056,4.331-6.373,6.133c-7.368,5.729-15.28,10.552-24.369,13.061
          			c-2.043,0.564-4.262,0.595-6.405,0.649c-1.323,0.034-1.725-1.053-0.934-2.15c0.133-0.185,0.495-0.384,0.675-0.329
          			c2.215,0.679,4.31-0.003,6.359-0.637c8.658-2.683,16.378-7.137,23.399-12.801c2.128-1.717,4.019-3.735,5.949-5.685
          			c0.632-0.638,1.118-1.455,1.539-2.259c0.883-1.687,0.376-2.611-1.538-2.503c-1.727,0.097-3.474,0.421-5.135,0.909
          			c-1.221,0.358-2.123,0.378-2.875-0.735C32.952,11.659,32.692,11.495,32.291,11.126z"/>
          	</g>
          </g>
          <g id="Frame21">
          	<g>
          		<path d="M5.819,32.264c-1.261-0.844-2.284-0.882-2.742-0.027c-1.622,3.031-0.343,5.711,2.76,5.845
          			c2.083,0.089,4.259-0.126,6.274-0.655c7.584-1.992,14.239-5.936,20.662-10.292c3.696-2.507,7.199-5.273,9.989-8.797
          			c0.992-1.253,1.868-2.678,2.445-4.161c0.958-2.464-0.289-4.447-2.897-4.8c-1.178-0.159-2.429-0.179-3.591,0.039
          			c-2.119,0.398-4.197,1.02-6.537,1.611c0.516,0.475,0.777,0.639,0.933,0.872c0.752,1.121,1.66,1.08,2.875,0.727
          			c1.662-0.483,3.407-0.81,5.133-0.906c1.912-0.107,2.502,0.872,1.514,2.491c-0.901,1.477-1.912,2.992-3.208,4.102
          			c-3.404,2.918-6.837,5.848-10.536,8.364c-5.832,3.966-12.113,7.123-19.037,8.782c-1.119,0.268-2.307,0.39-3.455,0.353
          			c-1.418-0.046-1.809-0.794-1.275-2.102C5.327,33.212,5.588,32.741,5.819,32.264z"/>
          		<path d="M5.819,32.264c-0.232,0.477-0.492,0.949-0.694,1.444C4.592,35.016,4.982,35.764,6.4,35.81
          			c1.149,0.037,2.337-0.085,3.455-0.353c6.924-1.658,13.205-4.816,19.037-8.782c3.7-2.516,7.133-5.446,10.536-8.364
          			c1.295-1.11,2.306-2.626,3.208-4.102c0.988-1.619,0.398-2.598-1.514-2.491c-1.726,0.097-3.471,0.423-5.133,0.906
          			c-1.214,0.353-2.123,0.395-2.875-0.727c-0.156-0.233-0.417-0.397-0.933-0.872c2.34-0.591,4.418-1.213,6.537-1.611
          			c1.161-0.218,2.413-0.198,3.591-0.039c2.608,0.353,3.855,2.336,2.897,4.8c-0.577,1.483-1.453,2.908-2.445,4.161
          			c-2.79,3.524-6.292,6.29-9.989,8.797c-6.423,4.356-13.078,8.301-20.662,10.292c-2.016,0.529-4.191,0.745-6.274,0.655
          			c-3.103-0.133-4.382-2.813-2.76-5.845C3.535,31.382,4.558,31.419,5.819,32.264z"/>
          	</g>
          </g>
          <g id="Frame22">
          	<g>
          		<path d="M32.142,11.178c0.478,0.35,0.818,0.488,0.987,0.741c0.725,1.082,1.599,1.077,2.765,0.719
          			c1.501-0.46,3.075-0.771,4.637-0.904c0.779-0.066,1.892,0.179,2.314,0.711c0.311,0.392-0.027,1.651-0.467,2.223
          			c-1.391,1.805-2.835,3.607-4.494,5.16c-4.678,4.381-10.003,7.871-15.687,10.806c-4.408,2.276-8.916,4.319-13.87,5.113
          			c-1.132,0.181-2.513,0.526-3.246-0.586c-0.693-1.051,0.267-2.07,0.871-2.913c0.601-0.839,0.443-1.318-0.345-1.81
          			c-0.785-0.49-1.387-0.445-1.81,0.466c-0.366,0.79-0.868,1.529-1.14,2.348c-0.864,2.602,0.42,4.73,3.163,4.827
          			c2.087,0.074,4.267-0.11,6.279-0.653c8.444-2.278,15.845-6.692,22.779-11.861c2.849-2.124,5.39-4.7,7.871-7.263
          			c1.092-1.127,1.887-2.658,2.461-4.143c0.953-2.464-0.306-4.412-2.92-4.808C38.827,8.829,35.661,10.012,32.142,11.178z"/>
          		<path d="M32.142,11.178c3.519-1.166,6.685-2.349,10.151-1.824c2.614,0.396,3.872,2.343,2.92,4.808
          			c-0.574,1.485-1.369,3.016-2.461,4.143c-2.482,2.563-5.022,5.139-7.871,7.263c-6.934,5.169-14.335,9.582-22.779,11.861
          			c-2.011,0.543-4.191,0.727-6.279,0.653c-2.743-0.097-4.027-2.226-3.163-4.827c0.272-0.818,0.774-1.558,1.14-2.348
          			c0.423-0.912,1.025-0.956,1.81-0.466c0.788,0.492,0.946,0.971,0.345,1.81c-0.604,0.843-1.564,1.862-0.871,2.913
          			c0.733,1.112,2.114,0.767,3.246,0.586c4.954-0.794,9.462-2.837,13.87-5.113c5.684-2.936,11.009-6.425,15.687-10.806
          			c1.658-1.553,3.103-3.355,4.494-5.16c0.44-0.571,0.778-1.831,0.467-2.223c-0.423-0.532-1.535-0.778-2.314-0.711
          			c-1.563,0.133-3.137,0.444-4.637,0.904c-1.167,0.358-2.04,0.363-2.765-0.719C32.96,11.666,32.62,11.527,32.142,11.178z"/>
          	</g>
          </g>
          <g id="Frame23">
          	<g>
          		<path d="M32.479,11.066c1.01,1.806,2.335,2.243,4.065,1.343c0.287-0.149,0.636-0.215,0.963-0.246
          			c1.48-0.139,2.963-0.35,4.443-0.337c0.982,0.008,1.367,0.719,1.005,1.678c-0.19,0.502-0.368,1.052-0.707,1.447
          			c-1.459,1.701-2.847,3.495-4.495,4.997c-6.176,5.63-13.181,10.022-20.916,13.152c-2.979,1.205-6.165,1.934-9.302,2.69
          			c-0.748,0.181-1.972-0.154-2.426-0.706c-0.317-0.385,0.117-1.664,0.547-2.33c0.852-1.318,1.905-2.513,2.931-3.711
          			c0.638-0.744,0.155-1.303-0.306-1.703c-0.29-0.251-1.106-0.363-1.322-0.157c-1.782,1.703-3.419,3.553-4.267,5.922
          			c-0.967,2.699,0.355,4.889,3.226,4.986c2.046,0.069,4.187-0.109,6.153-0.654c9.083-2.517,16.993-7.334,24.361-13.057
          			c2.317-1.8,4.389-3.954,6.372-6.129c1.036-1.137,1.83-2.596,2.392-4.042c0.981-2.524-0.275-4.473-2.971-4.866
          			C38.803,8.846,35.672,10.01,32.479,11.066z"/>
          		<path d="M32.479,11.066c3.193-1.056,6.324-2.22,9.745-1.722c2.695,0.393,3.952,2.342,2.971,4.866
          			c-0.562,1.446-1.355,2.905-2.392,4.042c-1.983,2.175-4.055,4.329-6.372,6.129c-7.368,5.723-15.277,10.54-24.361,13.057
          			c-1.966,0.545-4.107,0.723-6.153,0.654c-2.871-0.097-4.192-2.287-3.226-4.986c0.848-2.368,2.485-4.219,4.267-5.922
          			c0.216-0.206,1.032-0.094,1.322,0.157c0.461,0.399,0.944,0.958,0.306,1.703c-1.026,1.198-2.079,2.392-2.931,3.711
          			c-0.43,0.665-0.864,1.945-0.547,2.33c0.454,0.551,1.678,0.886,2.426,0.706c3.137-0.757,6.323-1.485,9.302-2.69
          			c7.735-3.129,14.74-7.522,20.916-13.152c1.648-1.503,3.036-3.296,4.495-4.997c0.339-0.395,0.517-0.945,0.707-1.447
          			c0.362-0.959-0.023-1.67-1.005-1.678c-1.48-0.013-2.963,0.199-4.443,0.337c-0.327,0.031-0.676,0.096-0.963,0.246
          			C34.814,13.31,33.489,12.873,32.479,11.066z"/>
          	</g>
          </g>
          <g id="Frame24">
          	<g>
          		<path d="M8.111,25.971c-2.235,2.196-4.382,4.278-5.426,7.172c-0.971,2.69,0.383,4.864,3.269,4.953
          			c2.046,0.063,4.175-0.146,6.153-0.666c7.544-1.982,14.168-5.899,20.563-10.223c3.735-2.525,7.275-5.312,10.092-8.87
          			c0.992-1.253,1.868-2.678,2.445-4.162c0.957-2.464-0.291-4.446-2.9-4.799c-1.178-0.159-2.429-0.179-3.591,0.04
          			c-2.118,0.398-4.194,1.02-6.527,1.609c0.544,0.506,0.841,0.695,1.02,0.962c0.701,1.05,1.549,0.964,2.663,0.66
          			c1.713-0.467,3.49-0.825,5.258-0.928c1.91-0.111,2.527,0.896,1.499,2.491c-1.094,1.698-2.348,3.359-3.813,4.739
          			c-7.616,7.174-16.409,12.452-26.327,15.796c-1.715,0.578-3.551,0.922-5.357,1.077c-2.252,0.194-2.857-0.848-1.658-2.787
          			c0.847-1.369,1.976-2.562,2.943-3.86c0.22-0.295,0.457-0.727,0.402-1.047C8.704,27.454,8.401,26.813,8.111,25.971z"/>
          		<path d="M8.111,25.971c0.29,0.842,0.593,1.483,0.708,2.157c0.055,0.32-0.182,0.752-0.402,1.047
          			c-0.968,1.298-2.096,2.49-2.943,3.86c-1.199,1.939-0.595,2.981,1.658,2.787c1.806-0.156,3.642-0.499,5.357-1.077
          			c9.918-3.344,18.711-8.622,26.327-15.796c1.465-1.38,2.719-3.041,3.813-4.739c1.027-1.594,0.411-2.602-1.499-2.491
          			c-1.767,0.103-3.545,0.46-5.258,0.928c-1.114,0.304-1.962,0.39-2.663-0.66c-0.179-0.268-0.475-0.457-1.02-0.962
          			c2.333-0.589,4.409-1.211,6.527-1.609c1.162-0.218,2.413-0.199,3.591-0.04c2.609,0.352,3.857,2.335,2.9,4.799
          			c-0.576,1.484-1.453,2.909-2.445,4.162c-2.817,3.558-6.358,6.345-10.092,8.87c-6.395,4.324-13.019,8.241-20.563,10.223
          			c-1.978,0.52-4.106,0.729-6.153,0.666c-2.886-0.089-4.24-2.263-3.269-4.953C3.729,30.249,5.876,28.167,8.111,25.971z"/>
          	</g>
          	<path d="M8.111,25.971c-2.235,2.196-4.382,4.278-5.426,7.172c-0.971,2.69,0.383,4.864,3.269,4.953
          		c2.046,0.063,4.175-0.146,6.153-0.666c7.544-1.983,14.168-5.899,20.563-10.223c3.735-2.525,7.275-5.312,10.092-8.87
          		c0.992-1.253,1.868-2.678,2.445-4.162c0.957-2.464-0.291-4.446-2.9-4.799c-1.178-0.159-2.429-0.179-3.591,0.04
          		c-2.118,0.398-4.194,1.02-6.527,1.609c0.544,0.506,0.841,0.695,1.02,0.962c0.701,1.05,1.549,0.964,2.663,0.66
          		c1.712-0.467,3.49-0.825,5.258-0.928c1.91-0.111,2.527,0.896,1.499,2.491c-1.094,1.698-2.348,3.359-3.813,4.739
          		c-7.616,7.174-16.409,12.452-26.327,15.796c-1.715,0.578-3.551,0.922-5.357,1.077c-2.252,0.194-2.857-0.848-1.658-2.787
          		c0.847-1.369,1.976-2.562,2.943-3.86c0.22-0.295,0.457-0.727,0.402-1.047C8.704,27.454,8.401,26.813,8.111,25.971z"/>
          </g>
        </svg>
      </div>
    );
  }
});

export default MenuRingSequence;