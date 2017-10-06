import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  links = [
    { url: '/tools/processes', label: 'システム開発プロセス 一覧表' },
    { url: '/tools/order', label: '作業指示メーカー' }
  ];
  links2 = [
    { url: 'https://aidon.club/', label: '人工知能の無料相談コミュニティ aidon' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
