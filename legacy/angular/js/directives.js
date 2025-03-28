app.directive('donutChart', function() {
	return {
		scope: { 'data': '=' },
		restrict: 'E',
		link: link
	};

function link(scope, element) {
	//
	var color = d3.scale.category20();
	var el = element[0];
	var width = 100;
	var height = 100;
	var min = Math.min(width, height);
	var pie = d3.layout.pie().sort(null);
	var arc = d3.svg.arc()
		.outerRadius(min / 2 * 1.0)
		.innerRadius(min / 2 * 0.5);
	var svg = d3.select(el).append('svg').attr({width: width, height: height}).append('g')
		.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    
	var path = svg.selectAll('path')
		.data(pie(scope.data))
		.enter().append('path')
		.transition().delay(function(d, i) { return i * 250; }).duration(250)
		.style("fill", function(d,i) { return color(i); })
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
			return function(t) {
			d.endAngle = i(t);
			return arc(d);
			}
		});
  }
});

app.directive('barChart', function() {
	return {
		scope: { 'data': '=' },
		restrict: 'E',
		link: link
	};

function link(scope, element) {
	//
	var data = scope.data;
	var color = d3.scale.category20();
	var el = element[0];
	var width = 500;
	var barHeight = 20;
	var svg = d3.select(el).append('svg').attr({width: width, height: barHeight*data.length});
	var bar = svg.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
	bar.append("rect")
		.attr("width", function(d){return 0;})
		.transition()
		.duration(1000)
		.attr("width", function(d){return d*20;})
		.style("fill", function(d,i) { return color(i); })
		.attr("height", barHeight - 1);
  }
});