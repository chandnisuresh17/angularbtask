import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import{fa fa-times-circle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
   fa fa-times-circle = fa fa-times-circle;
  @Input() task: Task = {

  };
  @Output() onDeleteElement: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  
  constructor() {

  }
  ngOnInit(): void {
  
  }

  onDelete(task: Task) {
    this.onDeleteElement.emit(task);
  
    
    
  }



  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}


