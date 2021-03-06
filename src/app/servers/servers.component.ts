import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
   servers: { id: number, name: string, status: string}[] = [];
  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }


  onReload(): void {
    // this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
