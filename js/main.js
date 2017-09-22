$('.fa fa-bars').click(function() {
	$('.drop-menu').animate({width:'toggle'});
});

var users = [
  {id: 1, name: 'Claudia', email: 'claudia.nydahl@gmail.com'}
];
var templates = [
  { id: 1, name: 'Dark', value: 'css/dark.css', logo: 'css/dark.css'},
  { id: 2, name: 'Light', value: 'css/light.css', logo: 'css/light.css'}
];
var app = new Vue({
  el: '#app',
  data: {
    users: users,
    templates: templates,
    default_template: 2,
    current_template: templates[1],

    tables: [
    { date: '12 September 2017',
      order: 'WO17004',
      amount: 'R2 400',
      status: 'Pending'
    },
    { date: '12 September 2017',
      order: 'WO17003',
      amount: 'R1 200',
      status: 'Pending'
    },
    { date: '11 September 2017',
      order: 'WO17002',
      amount: 'R3 600',
      status: 'Pending'
    },
    { date: '10 September 2017',
      order: 'WO17001',
      amount: 'R1 400',
      status: 'Received'
    },
    ], 
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    validateForm: function() {

    	event.preventDefault();

    	var userName = "Claudia";
    	var userEmail = "claudia.nydahl@gmail.com";
    	var loginName = document.getElementById('name').value;
    	var loginEmail = document.getElementById('email').value;

    	if(loginName == userName && loginEmail == userEmail) {
    		window.location.replace('admin.html');
    	} else {
    		location.reload();
    	}
    },
    orderCount: function() {
    	var orders = this.tables.length;
    	return orders;
    },
    garmentCount: function() {
    	var garments = this.tables.length;
    	return garments;
    },
    paymentsReceived: function(data) {
		var result = data.filter(function(ele){
        	return (ele.status == 'Received')
      	})

        return result.length;
     }
  }
});

