// Fetch the JSON file and parse it as an array of objects
fetch('data.json')
.then(response => response.json())
.then(data => {
  // Iterate over each object in the array and display its contents in an HTML list item
  data.forEach(company => {
    const li = document.createElement('li');

    const logo = document.createElement('img');
    logo.src = company.logo;
    logo.alt = `${company.company} logo`;
    li.appendChild(logo);

    const name = document.createElement('h4');
    name.textContent = company.company;
    li.appendChild(name);

    const address = document.createElement('p');
    address.textContent = company.address;
    /*To specifically target the address p element instead of all p elements, added classList*/
    address.classList.add('company-address')
    li.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = company.phone;
    phone.classList.add('phone-number')
    li.appendChild(phone);

    const website = document.createElement('a');
    website.href = company.websiteurl;
    website.textContent = company.websiteurl;
    li.appendChild(website);

    const membership = document.createElement('p');
    membership.textContent = `Membership level: ${company.membershiplevel}`;
    membership.classList.add('membership-level')
    li.appendChild(membership);

    document.querySelector('.company-list').appendChild(li);
  });
})
.catch(error => console.error(error));