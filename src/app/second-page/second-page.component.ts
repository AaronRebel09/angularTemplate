import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import * as t from 'topojson';
import { ElementRef } from '@angular/core';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { STATISTICS } from '../shared';

@Component({
  selector: 'app-second-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})


export class SecondPageComponent implements OnInit {
  @ViewChild('chart')
  private chartContainer: ElementRef;
  products: any = [];
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;


  constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    this.loadJSON();
    this.initSvg();
    this.draw();
    //this.drawBars();
    //this.initAxis();
    //this.drawAxis();
    //this.drawBars();
  }
  private loadJSON() {
    this.httpClient.get('assets/geo-data.json').subscribe(data2 => {
      console.log('geo-data = ', data2);
      this.products = data2;
    });
  }

  private initSvg() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(STATISTICS.map((d) => d.letter));
    this.y.domain([0, d3Array.max(STATISTICS, (d) => d.frequency)]);
  }

  private drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).ticks(10, '%'))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  private drawBars() {
    // tslint:disable-next-line:no-shadowed-variable
    const projection = d3.geoMercator();
    const path = d3.geoPath()
      .projection(projection);
    // @ts-ignore
    d3.json('assets/geo-data.json', function(data) {
      this.g.selectAll('path')
        .data(t.feature(data, data.objects.states).features)
        .join('path')
        .attr('fill', '#444')
        .attr('cursor', 'pointer');
    });
  }

  private draw() {
    const width = 900;
    const height = 600;

    // tslint:disable-next-line:no-shadowed-variable
    const projection = d3.geoMercator();

    const svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');

    console.log('json = ', this.products);
    console.log('states = ', this.products.states);

    console.log('topology = ', t.feature(this.products, this.products.states).features);

      this.g.selectAll(path)
        .data(t.feature(this.products, this.products.states).features)
        .join('path')
        .attr('fill', '#444')
        .attr('cursor', 'pointer');
  }

  private drawMap() {
    this.g.selectAll('.bar')
      .data(STATISTICS)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.letter) )
      .attr('y', (d) => this.y(d.frequency) )
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.frequency) );
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.products;

    this.httpClient.get('assets/geo-data.json').subscribe(data2 => {
      console.log(data2);
      this.products = data2;
    });

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const projection = d3.geoMercator();

    const path = d3.geoPath()
      .projection(projection);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const width = 900;
    const height = 600;
    const g = svg.append('g');
    console.log('map = ', this.products.objects.states);
    g.append('g')
      .attr('fill', '#444')
      .attr('cursor', 'pointer')
      .selectAll('path')
      .data(t.feature(this.products, this.products.objects.states).features)
      .join('path');
  }
}
