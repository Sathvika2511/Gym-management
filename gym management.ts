const members = [];

function addMember() {
    const name = document.getElementById('name').value.trim();
    const membershipId = document.getElementById('membershipId').value.trim();
    
    if (name && membershipId) {
        const member = { name, membershipId };
        members.push(member);
        displayMembers();
        document.getElementById('name').value = '';
        document.getElementById('membershipId').value = '';
    } else {
        alert('Please fill in both fields.');
    }
}

function removeMember(index) {
    members.splice(index, 1);
    displayMembers();
}

function displayMembers() {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';
    
    members.forEach((member, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${member.name} (ID: ${member.membershipId})
            <button class="remove-btn" onclick="removeMember(${index})">Remove</button>
        `;
        memberList.appendChild(li);
    });
}
