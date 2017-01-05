/* jshint -W117 */
'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'views/contacts/contacts.html',
        controller: 'contactsCtrl'
    });
}])

.controller('contactsCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    
    // init Firebase
    var firebaseReference = firebase.database().ref().child("contacts");   
    $scope.contacts = $firebaseArray(firebaseReference);
    
    // Show Add Form
    $scope.showAddForm = function() {
        $scope.addFormShow = true;  
    };
    
    // Show Edit Form
    $scope.showEditForm = function(contact) {
        
        $scope.id               = contact.$id;
        $scope.name             = contact.name;
        $scope.email            = contact.email;
        $scope.company          = contact.company;      
        $scope.mobile_phone     = contact.phones.mobile;
        $scope.home_phone       = contact.phones.home;
        $scope.work_phone       = contact.phones.work;      
        $scope.street_address   = contact.address.street_address;
        $scope.city             = contact.address.city;
        $scope.state            = contact.address.state;
        $scope.zipcode          = contact.address.zipcode;
        
        $scope.editFormShow = true; 
    };
    
    // Hide all Forms
    $scope.hide = function() {
        $scope.addFormShow = false;  
        $scope.contactShow = false;  
    };
    
    // Submit Contact
    $scope.addFormSubmit = function() {
        console.log('Adding Contact...');
        var name;
        var email;
        var company;
        var mobile_phone;
        var home_phone;
        var work_phone;
        var street_address;
        var city;
        var state;
        var zipcode;
        
        // Assign values
        if($scope.name){ name = $scope.name; }else{ name = null; }
        if($scope.email){ email = $scope.email; }else{ email = null; }
        if($scope.company){ company = $scope.company; }else{ company = null; }
        
        if($scope.mobile_phone){ mobile_phone = $scope.mobile_phone; }else{ mobile_phone = null; }
        if($scope.home_phone){ home_phone = $scope.home_phone; }else{ home_phone = null; }
        if($scope.work_phone){ work_phone = $scope.work_phone; }else{ work_phone = null; }
        
        if($scope.street_address){ street_address = $scope.street_address; }else{ street_address = null; }
        if($scope.city){ city = $scope.city; }else{ city = null; }
        if($scope.state){ state = $scope.state; }else{ state = null; }
        if($scope.zipcode){ zipcode = $scope.zipcode; }else{ zipcode = null; }
        
        // Build Object
        $scope.contacts.$add({
            name: name,
            email: email,
            company: company,
            phones: {
                    mobile: mobile_phone,
                    home: home_phone,
                    work: work_phone,
                    i: "i"
            },
            address: {
                    street_address: street_address,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                    i: "i"
            }
        }).then(function(r) {
            var id = r.getKey();
            console.log('Added Contact with ID: ' + id );
            
            // Clear Form
            clearFields();
            
            // Hide Form
            $scope.addFormShow = false;
            
            // Send Message
            $scope.msg = "Contact Added";
        });
    };
    
    // Submit Edit
    $scope.editFormSubmit = function() {
        console.log('Updating Contact...');
        
        // Get ID
        var id = $scope.id;
        
        // Get Record
        var record = $scope.contacts.$getRecord(id);
        
        // Assign Values
        record.name                     = $scope.name;
        record.email                    = $scope.email;
        record.company                  = $scope.company;
        
        record.phones.mobile            = $scope.mobile_phone;
        record.phones.home              = $scope.home_phone;
        record.phones.work              = $scope.work_phone;
        
        record.address.street_address   = $scope.street_address;
        record.address.city             = $scope.city;
        record.address.state            = $scope.state;
        record.address.zipcode          = $scope.zipcode;
        
        // Save Contact
        $scope.contacts.$save(record).then(function() {
            //console.log(firebaseReference.key);
        });
        
        // Clean up
        clearFields();
        $scope.editFormShow = false;
        
        $scope.msg = "Contact Updated";       
    };
    
    $scope.showContact = function(contact) {
        console.log('Getting Contact...');
        
        $scope.name             = contact.name;
        $scope.email            = contact.email;
        $scope.company          = contact.company;
        
        $scope.mobile_phone     = contact.phones.mobile;
        $scope.home_phone       = contact.phones.home;
        $scope.work_phone       = contact.phones.work;
        
        $scope.street_address   = contact.address.street_address;
        $scope.city             = contact.address.city;
        $scope.state            = contact.address.state;
        $scope.zipcode          = contact.address.zipcode;
        
        $scope.contactShow = true;
    };
    
    $scope.removeContact = function(contact) {
        console.log('Removing Contact');
        
        $scope.contacts.$remove(contact);
        
        $scope.msg = "Contact Removed";
    };
    
    // Clear $scope Fields
    function clearFields() {
        console.log('Clearing all Fields...');
        
        $scope.name = '';
        $scope.email = '';
        $scope.company = '';
        $scope.mobile_phone = '';
        $scope.home_phone = '';
        $scope.work_phone = '';
        $scope.street_address = '';
        $scope.city = '';
        $scope.state = '';
        $scope.zipcode = ''; 
    }
}]);