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
		},
		groups: {
        html:	{color:{background:"#82B5FC",border:"#4f6e99",highlight:{background:"#82B5FC",border:"#4f6e99"}}},
        js:		{color:{background:"#FEC584",border:"#997750",highlight:{background:"#FEC584",border:"#997750"}}},
        css:	{color:{background:"#B2EA94",border:"#749961",highlight:{background:"#B2EA94",border:"#749961"}}},
        image:	{color:{background:"#C49AE8",border:"#816699",highlight:{background:"#C49AE8",border:"#816699"}}},
        flash:	{color:{background:"#2DB7C1",border:"#1E7980",highlight:{background:"#2DB7C1",border:"#1E7980"}}},
        font:	{color:{background:"#FF523E",border:"#993125",highlight:{background:"#FF523E",border:"#993125"}}},
        other:	{color:{background:"#C4C4C4",border:"#808080",highlight:{background:"#C4C4C4",border:"#808080"}}},
        
		Image:{color:{background:"#c49ae8",border:"#8732D0",highlight:{background:"#c49ae8",border:"#8732D0"}}},
		Javascript:{color:{background:"#fec584",border:"#FD8906",highlight:{background:"#fec584",border:"#FD8906"}}},
		CSS:{color:{background:"#b2ea94",border:"#6AD630",highlight:{background:"#b2ea94",border:"#6AD630"}}},
		HTML:{color:{background:"#82b5fc",border:"#0E70F9",highlight:{background:"#82b5fc",border:"#0E70F9"}}},
		Font:{color:{background:"#ff523e",border:"#D71600",highlight:{background:"#ff523e",border:"#D71600"}}},
		Flash:{color:{background:"#2db7c1",border:"#1F7C83",highlight:{background:"#2db7c1",border:"#1F7C83"}}},
		Video:{color:{background:"#2db7c1",border:"#1F7C83",highlight:{background:"#2db7c1",border:"#1F7C83"}}},
		Text:{color:{background:"#FEF184",border:"#FDE306",highlight:{background:"#FEF184",border:"#FDE306"}}},
		JSON:{color:{background:"#fec584",border:"#6AD630",highlight:{background:"#fec584",border:"#6AD630"}}},
		XML:{color:{background:"#FFFF00",border:"#FFA500",highlight:{background:"#FFFF00",border:"#FFA500"}}},
		Binary:{color:{background:"#FB7E81",border:"#FA0A10",highlight:{background:"#FB7E81",border:"#FA0A10"}}},
		RSS:{color:{background:"#7BE141",border:"#41A906",highlight:{background:"#7BE141",border:"#41A906"}}},
		Text:{color:{background:"#EB7DF4",border:"#E129F0",highlight:{background:"#EB7DF4",border:"#E129F0"}}},
		Unknown:{color:{background:"#F47DEB",border:"#F029E1",highlight:{background:"#F47DEB",border:"#F029E1"}}}
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
