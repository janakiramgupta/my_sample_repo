Vue.component("opsassignlist", {
  name: "opsassignlist",
  components: {
		    Element,
		  },
  data: function() {
    return {
	    	tableheight :  parseInt(document.documentElement.clientHeight) - 250,
	    	currentRow: null,
	    	left_search	: "",
			right_search : "",
			options: [
				{ value:'', text: 'Select' },
				{ value:'gender', text: 'Female' },
				{ value:'isactive', text: 'Active' }
			],
			tableData : [],
	    	right_tableData : [],
	        left_tableData: [{
				"_id": "5a719f4abe1454d288a446fb",
				"index": 0,
				"guid": "b3ca8526-631d-4bf3-8f06-3b6471d8d837",
				"isActive": false,
				"balance": "$1,818.45",
				"picture": "http://placehold.it/32x32",
				"age": 21,
				"eyeColor": "blue",
				"name": "Zelma Hill",
				"gender": "female",
				"company": "SARASONIC",
				"email": "zelmahill@sarasonic.com",
				"phone": "+1 (970) 514-3943",
				"address": "737 Madeline Court, Sardis, Rhode Island, 6383",
				"registered": "2015-09-02T01:19:33 -06:-30",
				"latitude": 27.20603,
				"longitude": -123.84414,
				"greeting": "Hello, Zelma Hill! You have 1 unread messages."
			},
			{
				"_id": "5a719f4a6efb81b6075cf89c",
				"index": 1,
				"guid": "4f57129a-5836-41a1-b649-4fdb8b8de50b",
				"isActive": true,
				"balance": "$2,089.66",
				"picture": "http://placehold.it/32x32",
				"age": 36,
				"eyeColor": "brown",
				"name": "Gloria Monroe",
				"gender": "female",
				"company": "KEGULAR",
				"email": "gloriamonroe@kegular.com",
				"phone": "+1 (922) 480-2722",
				"address": "237 Vandam Street, Westboro, North Dakota, 8800",
				"registered": "2016-11-03T09:47:35 -06:-30",
				"latitude": -32.049426,
				"longitude": -120.344428,
				"greeting": "Hello, Gloria Monroe! You have 2 unread messages."
			},
			{
				"_id": "5a719f4a54dea909631f8242",
				"index": 2,
				"guid": "614c0b13-8318-46f9-afed-ca08aaf98111",
				"isActive": true,
				"balance": "$3,887.03",
				"picture": "http://placehold.it/32x32",
				"age": 32,
				"eyeColor": "green",
				"name": "Pittman Compton",
				"gender": "male",
				"company": "MOBILDATA",
				"email": "pittmancompton@mobildata.com",
				"phone": "+1 (822) 479-2805",
				"address": "395 Colonial Court, Toftrees, Washington, 4458",
				"registered": "2015-01-16T12:58:58 -06:-30",
				"latitude": -55.725444,
				"longitude": -35.000187,
				"greeting": "Hello, Pittman Compton! You have 7 unread messages."
			},
			{
				"_id": "5a719f4adbdf80529ae6619b",
				"index": 3,
				"guid": "295ea36b-bbf6-4f3d-b671-38d594b97771",
				"isActive": true,
				"balance": "$1,269.90",
				"picture": "http://placehold.it/32x32",
				"age": 23,
				"eyeColor": "blue",
				"name": "Merritt Vega",
				"gender": "male",
				"company": "YOGASM",
				"email": "merrittvega@yogasm.com",
				"phone": "+1 (893) 435-3412",
				"address": "837 Hale Avenue, Crenshaw, Pennsylvania, 3483",
				"registered": "2017-02-14T03:15:03 -06:-30",
				"latitude": 24.563976,
				"longitude": -110.018622,
				"greeting": "Hello, Merritt Vega! You have 7 unread messages."
			},
			{
				"_id": "5a719f4a0368bbb74eef718b",
				"index": 4,
				"guid": "1478f13f-a607-488e-b72f-ac5a23644b62",
				"isActive": false,
				"balance": "$2,941.29",
				"picture": "http://placehold.it/32x32",
				"age": 23,
				"eyeColor": "green",
				"name": "Workman Bishop",
				"gender": "male",
				"company": "MAGNEATO",
				"email": "workmanbishop@magneato.com",
				"phone": "+1 (813) 550-2614",
				"address": "879 Flatbush Avenue, Ironton, South Dakota, 6826",
				"registered": "2016-05-07T07:35:02 -06:-30",
				"latitude": -23.338318,
				"longitude": -25.579806,
				"greeting": "Hello, Workman Bishop! You have 1 unread messages."
			},
			{
				"_id": "5a719f4a9351a1e51ba57f83",
				"index": 5,
				"guid": "e23d726d-e697-4b8f-b246-0ee64ffbfdb9",
				"isActive": true,
				"balance": "$2,026.32",
				"picture": "http://placehold.it/32x32",
				"age": 30,
				"eyeColor": "blue",
				"name": "Mcintyre Stafford",
				"gender": "male",
				"company": "WEBIOTIC",
				"email": "mcintyrestafford@webiotic.com",
				"phone": "+1 (985) 509-2367",
				"address": "710 Gotham Avenue, Belgreen, Colorado, 5812",
				"registered": "2016-09-27T06:43:54 -06:-30",
				"latitude": 36.559873,
				"longitude": 92.903573,
				"greeting": "Hello, Mcintyre Stafford! You have 9 unread messages."
			},
			{
				"_id": "5a719f4a8d76aa662125dce6",
				"index": 6,
				"guid": "b95dcdc2-a92f-4db7-b73d-76c75aab364c",
				"isActive": false,
				"balance": "$3,857.49",
				"picture": "http://placehold.it/32x32",
				"age": 23,
				"eyeColor": "green",
				"name": "Gilliam Acevedo",
				"gender": "male",
				"company": "REMOLD",
				"email": "gilliamacevedo@remold.com",
				"phone": "+1 (908) 516-2452",
				"address": "122 Rewe Street, Hessville, Maine, 9744",
				"registered": "2016-10-20T03:21:38 -06:-30",
				"latitude": -73.823435,
				"longitude": 101.141268,
				"greeting": "Hello, Gilliam Acevedo! You have 6 unread messages."
			},
			{
				"_id": "5a719f4a496f89d5d6bc9df7",
				"index": 7,
				"guid": "d1df3431-c301-4afc-82b6-f686ffc59c90",
				"isActive": true,
				"balance": "$2,682.93",
				"picture": "http://placehold.it/32x32",
				"age": 38,
				"eyeColor": "brown",
				"name": "Alissa Harrison",
				"gender": "female",
				"company": "HOMELUX",
				"email": "alissaharrison@homelux.com",
				"phone": "+1 (952) 403-2207",
				"address": "499 Hart Place, Tetherow, Texas, 8849",
				"registered": "2014-10-02T01:24:21 -06:-30",
				"latitude": 40.427218,
				"longitude": 33.590272,
				"greeting": "Hello, Alissa Harrison! You have 2 unread messages."
			},
			{
				"_id": "5a719f4a7b8e958311860400",
				"index": 8,
				"guid": "81a7ca91-707f-48eb-8f39-10e2096b81a3",
				"isActive": false,
				"balance": "$2,871.53",
				"picture": "http://placehold.it/32x32",
				"age": 36,
				"eyeColor": "brown",
				"name": "June Hays",
				"gender": "female",
				"company": "LYRIA",
				"email": "junehays@lyria.com",
				"phone": "+1 (944) 449-3170",
				"address": "378 Schermerhorn Street, Hall, Tennessee, 8313",
				"registered": "2015-02-23T01:14:27 -06:-30",
				"latitude": -39.050307,
				"longitude": 126.83565,
				"greeting": "Hello, June Hays! You have 1 unread messages."
			},
	        {
	            "_id": "5a719f4a496f89d5d6bc9df799",
	            "index": 7,
	            "guid": "d1df3431-c301-4afc-82b6-f686ffc59c90",
	            "isActive": true,
	            "balance": "$2,682.93",
	            "picture": "http://placehold.it/32x32",
	            "age": 29,
	            "eyeColor": "brown",
	            "name": "Krishna",
	            "gender": "male",
	            "company": "HOMELUX",
	            "email": "alissaharrison@homelux.com",
	            "phone": "+1 (952) 403-2207",
	            "address": "499 Hart Place, Tetherow, Texas, 8849",
	            "registered": "2014-10-02T01:24:21 -06:-30",
	            "latitude": 40.427218,
	            "longitude": 33.590272,
	            "greeting": "Hello, Alissa Harrison! You have 2 unread messages."
	        },
	        {
	            "_id": "5a719f4a7b8e958311860499",
	            "index": 8,
	            "guid": "81a7ca91-707f-48eb-8f39-10e2096b81a3",
	            "isActive": false,
	            "balance": "$2,871.53",
	            "picture": "http://placehold.it/32x32",
	            "age": 29,
	            "eyeColor": "brown",
	            "name": "Tulasi",
	            "gender": "male",
	            "company": "LYRIA",
	            "email": "junehays@lyria.com",
	            "phone": "+1 (944) 449-3170",
	            "address": "378 Schermerhorn Street, Hall, Tennessee, 8313",
	            "registered": "2015-02-23T01:14:27 -06:-30",
	            "latitude": -39.050307,
	            "longitude": 126.83565,
	            "greeting": "Hello, June Hays! You have 1 unread messages."
	        }],
	      }
  },
  
  mounted() {
			this.tableData = this.left_tableData
		},
  methods: {
    handleSelectedRow(val) {
	    		this.currentRow = val;
	    	},
	    	
	    	moveItemToRight() {
	    		if(this.currentRow == null){
	    			this.$alert("Please select any item from the list", "Notification", {
	    				confirmButtonText: "OK",
	    			});
	    		} else {
	    			if(this.right_tableData.indexOf(this.currentRow) == -1 && this.currentRow != null){
	    				this.right_tableData.push(this.currentRow);
	    			}
	    			
	    			if(this.left_tableData.indexOf(this.currentRow) != -1 && this.currentRow != null){
	    				this.left_tableData.splice(this.left_tableData.indexOf(this.currentRow), 1);
	    			}
	    		}
	    	},
	    	
	    	moveItemToLeft(){
	    		if(this.currentRow == null){
	    			this.$alert("Please select any item from the list", "Notification", {
	    				confirmButtonText: "OK",
	    			});
	    		} else {
	    			if(this.left_tableData.indexOf(this.currentRow) == -1 && this.currentRow != null){
	    				this.left_tableData.push(this.currentRow);
	    			}
	    			
	    			if(this.right_tableData.indexOf(this.currentRow) != -1 && this.currentRow != null){
	    				this.right_tableData.splice(this.right_tableData.indexOf(this.currentRow), 1);
	    			}
	    		}
	    	},
	    	
	    	leftTableRowDblClick(leftrow, leftcolumn, event){
	    		this.currentRow = leftrow;
	    		this.moveItemToRight();
	    	},
	    	
	    	rightTableRowDblClick(rightrow, rightcolumn, event){
	    		this.currentRow = rightrow;
	    		this.moveItemToLeft();
			},
			
			onSelectedType(event){

				var selectedvalue = event.target.value;
				for(var i = 0; i < this.left_tableData.length; i++) {
					var obj = this.left_tableData[i];

					//console.log(obj.id);

					if(obj.hasOwnProperty(selectedvalue)){
						if(selectedvalue == "gender" && obj.gender != "female"){
							this.left_tableData.splice(this.left_tableData.indexOf(obj), 1);
						}
					} else {
						this.left_tableData.push(this.tableData);
					}


				}
			}
  },
  template: `
    <div class="assign-list-container">
		<div class="left-tabDiv">

			<select style="width: 100px;"@change="onSelectedType($event)">
				<option v-for="optionValue in options" :value="optionValue.value">{{optionValue.text}}</option>
			</select>

			<el-input v-model="left_search" size="large" placeholder="Type name to search"/>
			
			<el-table id="left_table" ref="assignListTable" :data="left_tableData.filter(data => !left_search || data.name.toLowerCase().includes(left_search.toLowerCase()))" height="450px" empty-text="No records selected" highlight-current-row @current-change="handleSelectedRow" @row-dblclick="leftTableRowDblClick">
				<el-table-column prop="name" label="Name" sortable>
				</el-table-column>
				<el-table-column prop="eyeColor" label="Eye Color" sortable>
				</el-table-column>
				<el-table-column prop="age" label="Age" sortable>
				</el-table-column>
			</el-table>
			
		</div>
		
		<div class="assign-btns">
			<el-button size="mini" @click="moveItemToRight">&gt;</el-button><br />
			<el-button size="mini" @click="moveItemToLeft">&lt;</el-button>
		</div>
		
		
		<div class="right-tabDiv">
			<el-input v-model="right_search" size="large" placeholder="Type name to search"/>
			
			<el-table id="right_table" ref="assignListTable" :data="right_tableData.filter(data => !right_search || data.name.toLowerCase().includes(right_search.toLowerCase()))" height="450px" empty-text="No records selected" highlight-current-row @current-change="handleSelectedRow" @row-dblclick="rightTableRowDblClick">
				<el-table-column prop="name" label="Name" sortable>
				</el-table-column>
				<el-table-column prop="eyeColor" label="Eye Color" sortable>
				</el-table-column>
				<el-table-column prop="age" label="Age" sortable>
				</el-table-column>
			</el-table>
		</div>
	</div>
	`
});



