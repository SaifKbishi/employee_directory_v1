$(document).ready(function() {
  let url = 'https://randomuser.me/api/?results=12';
	console.log('working');

  const employees = document.getElementById('employees');
  const photosDiv = document.querySelector('.contained');

  $('#photos').html('');
	$.ajax(url,{
		type: "GET",
		success: function(data){
				let employeeHTML = '';
        if(data.results.length > 0){
					$.each(data.results, function(i, emp){
						employeeHTML += '<li class="grid-25 tablet-grid-50 employee">';
						employeeHTML += '<a ><div class="emp-card">';
						employeeHTML += '<div class="card-avatar">';
						employeeHTML += '<img src="' + emp.picture.large + '"></div>';
						employeeHTML += '<div class="card-details">';
						employeeHTML += '<div ><span class="name">' +emp.name.first + '</span> ' +'<span class="name">' +emp.name.last +' </span></div>';
						employeeHTML += '<div>' +emp.email +'</div>';
						employeeHTML += '<div class="city">' +emp.location.city +'</div>';
            employeeHTML += '<hr class="hr modalOnly">';
            employeeHTML += '<div class="phone modalOnly">' +emp.phone + '</div>';
            employeeHTML += '<div class="state modalOnly">' +emp.location.state + ' '+emp.location.street +' '+ emp.location.postcode+'</div>';
            employeeHTML += '<div class="dob modalOnly"> Brithday:' +emp.dob.date.substring(8,10) + '/' +emp.dob.date.substring(5,7) + '/'+emp.dob.date.substring(0,4) +  '</div>';
            employeeHTML += '</div></div></a></li>'
					});
				}
				$('#employees').html(employeeHTML);
	      console.log('all employees were added to the page');

        const employee = document.querySelectorAll('.employee');
        const modalcontent = document.querySelector('.modal');//added
        const modalForEmployee = document.getElementById('modalForEmployee');
        const modalOnly = document.querySelector('.modalOnly');//added
        let employeeInModal = '';
        const modalcontentdiv = document.querySelector('.modal-content');

        $.each(employee, function(i){
          employee[i].addEventListener('click', (e)=>{
            modalcontent.style.display = "flex";
            employeeInModal = $(this).clone();
            $('#modalForEmployee').html(employeeInModal);
            $('#modalForEmployee .emp-card').addClass('modalDisplay');
            $("#modalForEmployee .card-details .modalOnly").removeClass('modalOnly').addClass('display4modal');
          });
        });

        // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modalcontent.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modalcontent) {
              modalcontent.style.display = "none";
            }
          }
			}
		}
	);
}); // end ready
