import { Component, OnInit } from '@angular/core';
import * as $ from'jquery';
import {GlobleServiceService} from '../globle-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, Navigation } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  step1=true
  step2=false
  step3=false
  activeClass2=0
  activeClass3=0
  state:any
  state_id:any
  city:any
  department:any
  university:any
  city_hide=false
  course:any
  institute:any
  user_course:any
  streamSpecialization=false
  stream:any;
  registerChek='4'

  add_user_1: FormGroup;
	user_data_1 = {
		first_name:"",
		email:"",
		address:"",
		state:"",
		city:"",
		// phone_no:"",
  };
  
  employee_1: FormGroup;
	user_employee_1 = {
		company_name:"",
		designation:"",
		current_years_in_job:"",
		total_work_exp_in_years:"",
		function:"",
		industry:"",
  };

  employee_2: FormGroup;
	user_employee_2 = {
		badges_earned:"",
		career_creds:"",
		reward_and_credit_points:"",
  };
  
  student_1: FormGroup;
	user_student_1 = {
		institute_name:"",
		course_degree:"",
		current_year:"",
		stream_specialization:"",
  };
  
  student_2: FormGroup;
	user_student_2 = {
		career_objective:"",
		current_need:"",
		career_preparation_development:"",
	};

  constructor(
    private router : Router, 
		public menu: MenuController,
		private storage: Storage,
		public globleServiceService: GlobleServiceService,
		public alertController: AlertController,
		private navCtrl: NavController,
    public toastController:ToastController,
    private ngxService: NgxUiLoaderService
  ) { 

    let email_pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

		this.add_user_1 = new FormGroup({
			first_name: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.pattern(email_pattern)]),            
			address: new FormControl('', [Validators.required]),
			state: new FormControl('', [Validators.required]),
			city: new FormControl('', [Validators.required]),
			// phone_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    });

		this.employee_1 = new FormGroup({
			company_name: new FormControl('', [Validators.required]),
			designation: new FormControl('', [Validators.required]),
			current_years_in_job: new FormControl('', [Validators.required]),
			total_work_exp_in_years: new FormControl('', [Validators.required]),
			function: new FormControl('', [Validators.required]),
			industry: new FormControl('', [Validators.required]),
    });

    this.employee_2 = new FormGroup({
			badges_earned: new FormControl(),
			career_creds: new FormControl('', [Validators.required]),
			reward_and_credit_points: new FormControl(),
    });

		this.student_1 = new FormGroup({
			institute_name: new FormControl('', [Validators.required]),
			course_degree: new FormControl('', [Validators.required]),
			current_year: new FormControl('', [Validators.required]),
			stream_specialization: new FormControl('', [Validators.required]),
    });

		this.student_2 = new FormGroup({
			career_objective: new FormControl('', [Validators.required]),
			current_need: new FormControl('', [Validators.required]),
			career_preparation_development: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  ionViewWillEnter(){
		this.stateList()
		this.universityList()
		this.departmentList()
		this.instituteList()
		this.courseList()
	}

  nextTab1(){
    this.step1=false
    this.step2=true
    this.step3=false
    this.activeClass2=1
  }

  nextTab2(){
    this.step1=false
    this.step2=false
    this.step3=true
    this.activeClass3=1
  }

  nextTabStudent2(){
    this.step1=false
    this.step2=false
    this.step3=true
    this.activeClass3=1
  }

  nextTab3(){
    console.log('employee - employee_2 - employee_3')
    this.ngxService.start()
    let key = {
      'apikey' : this.globleServiceService.apikey,
      'role' : this.registerChek,
      'first_name' : this.user_data_1.first_name,
      'email' : this.user_data_1.email,
      'address' : this.user_data_1.address,
      'state' : this.user_data_1.state,
      'city' : this.user_data_1.city,
      // 'phone_no' : this.user_data_1.phone_no,
      'company_name':this.user_employee_1.company_name,
      'designation':this.user_employee_1.designation,
      'current_years_in_job':this.user_employee_1.current_years_in_job,
      'total_work_exp_in_years':this.user_employee_1.total_work_exp_in_years,
      'function':this.user_employee_1.function,
      'industry':this.user_employee_1.industry,
      'badges_earned' : this.user_employee_2.badges_earned,
      'career_creds' : this.user_employee_2.career_creds,
      'reward_and_credit_points' : this.user_employee_2.reward_and_credit_points,
    }
    this.globleServiceService.GlobalHit(key,'signup')
    .then(async data => {
      this.ngxService.stop()
      if(data['ErrorCode']=='0'){	
        this.alertMsgsuccess(data['message'])
				this.router.navigateByUrl('/signup-otp/'+ data['data'].otp+'/'+ data['data'].email)
			}else if(data['ErrorCode']=='1'){
        this.alertMsg(data['message'])
			}
		}); 
	}

  nextTabStudent3(){
    console.log('student - student_2 - studen_3')
    this.ngxService.start()
    let key = {
      'apikey' : this.globleServiceService.apikey,
      'role' : this.registerChek,
      'first_name' : this.user_data_1.first_name,
      'email' : this.user_data_1.email,
      'address' : this.user_data_1.address,
      'state' : this.user_data_1.state,
      'city' : this.user_data_1.city,
      // 'phone_no' : this.user_data_1.phone_no,
      'institute_name' : this.user_student_1.institute_name,
      'course_degree' : this.user_student_1.course_degree,
      'current_year' : this.user_student_1.current_year,
      'stream_specialization' : this.user_student_1.stream_specialization,
      'career_objective' : this.user_student_2.career_objective,
      'current_need' : this.user_student_2.current_need,
      'career_preparation_development' : this.user_student_2.career_preparation_development,
    }
    this.globleServiceService.GlobalHit(key,'signup')
    .then(async data => {
      this.ngxService.stop()
      if(data['ErrorCode']=='0'){	
        this.alertMsgsuccess(data['message'])
        this.router.navigateByUrl('/signup-otp/'+ data['data'].otp+'/'+ data['data'].email)
			}else if(data['ErrorCode']=='1'){
        this.alertMsg(data['message'])
			}
		}); 
  }

  async alertMsg(error_msg_show){
		const toast = await this.toastController.create({
			message: error_msg_show,
			color: 'danger',
			position:'bottom',
			duration: 2000,
		});
		toast.present();
  }
  
  async alertMsgsuccess(error_msg_show){
    const toast = await this.toastController.create({
      message: error_msg_show,
      color: 'success',
      position:'bottom',
      duration: 2000,
    });
    toast.present();
  }

  skip1(){
    this.step1=false
    this.step2=true
    this.step3=false
    this.activeClass2=1
  }
  
  skip2(){
    this.step1=false
    this.step2=false
    this.step3=true
    this.activeClass3=1
  }
 
  stateList(){
		let key={'apikey' : this.globleServiceService.apikey,}
		this.globleServiceService.GlobalHit(key,'state_list')
		.then(async data => {this.state=data['data']}); 
  }

  departmentList(){
		let key={'apikey' : this.globleServiceService.apikey,}
		this.globleServiceService.GlobalHit(key,'department_list')
		.then(async data => {this.department=data['data']}); 
  }

  universityList(){
		let key={'apikey' : this.globleServiceService.apikey,}
		this.globleServiceService.GlobalHit(key,'university_list')
		.then(async data => {this.university=data['data']}); 
  }

  instituteList(){
		let key={'apikey' : this.globleServiceService.apikey,}
		this.globleServiceService.GlobalHit(key,'institute_list')
		.then(async data => {this.institute=data['data']}); 
  }

  courseList(){
		let key={'apikey' : this.globleServiceService.apikey,}
		this.globleServiceService.GlobalHit(key,'course_list')
    .then(async data => {this.course=data['data']}); 
  }

  stateValue(val){
    this.state_id =val
    this.city_hide=true
    let key={'apikey' : this.globleServiceService.apikey,'state_id' : this.state_id,}
		this.globleServiceService.GlobalHit(key,'city_list')
		.then(async data => {this.city=data['data']}); 
  }

  cityValue(value){
    console.log(value)
  }

  selectCourse(val){
      this.user_course = val
      this.streamSpecialization = true
      let key={'apikey' : this.globleServiceService.apikey,'course_id' : this.user_course}
      this.globleServiceService.GlobalHit(key,'stream_list')
      .then(async data => {this.stream=data['data']}); 
  }

  changeRegister(value){
    this.registerChek=value
  }

  numberAccept(event): boolean {
		const charCode = (event.which) ? event.which : event.keyCode;
		if(charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
  
}
