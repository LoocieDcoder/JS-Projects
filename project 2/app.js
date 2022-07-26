let data = [
    {
        name: 'Lucy',
        age: '30'
    },
    {
        name: 'Adwoa',
        age: '30'
    },
    {
        name: 'Michael',
        age: '33'
    },
    {
        name: 'Gills',
        age: '19'
    },
    {
        name: 'Daniel',
        age: '64'
    },
    {
        name: 'Monicia',
        age: '27'
    },
    {
        name: 'Jesus',
        age: '30'
    },
    {
        name: 'Grace',
        age: '30'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
