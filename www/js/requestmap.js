function renderRequestmap(nodes,edges,target) {
	var container = document.getElementById(target);
	var data = { nodes: nodes, edges: edges };
	var options = {
		nodes: {
			shape: 'dot',
			size: 4,
			borderWidthSelected: 5
		},
		edges: {
			arrows: {
				middle: {
					enabled: true,
					scaleFactor: 0.5
				}
			},
			dashes: false,
			hoverWidth: 2,
			selectionWidth: 5,
			font: {
				align: 'bottom'
			}
		},
		interaction: {
			navigationButtons: true,
			keyboard: true
		},
		physics:{
			barnesHut: {
				  gravitationalConstant: -1000,
				  centralGravity: 0.3,
				  springLength: 95,
				  springConstant: 0.01,
				  damping: 0.2,
				  avoidOverlap: 0
			}
		},
			layout: {
			randomSeed: 123467890,
			improvedLayout:false
		}
	};
	var network = new vis.Network(container, data, options);
	network.on("doubleClick", function (params) {
		console.log(params);
		if (params['nodes'].length == 0) {
			// double-click on canvas
			var toggled = container.classList.toggle('fullscreen');
			console.log(toggled);
		} else {
			// double-click on node
			window.location.href=window.location.href.replace('domains','details')+'#step1_request'+(params['nodes'][0]+1);
		}
	});
}
