import { Component, OnInit } from '@angular/core';
import {Member} from "../../_models/member";
import {MemberService} from "../../_services/member.service";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe(members =>{
      this.members = members;
    })
  }
}
