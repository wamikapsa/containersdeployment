import { Component, inject, OnInit } from '@angular/core';

import { rnd } from '../utils'
import {ActivatedRoute} from '@angular/router';

const IMG_COUNT = 14
const DEFAULT_COUNT = 4

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {

  protected dovs: number[] = []
  private activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const count = parseInt(this.activatedRoute.snapshot.queryParams['count']) || DEFAULT_COUNT
    this.dovs = rnd(IMG_COUNT, count)
  }
}
