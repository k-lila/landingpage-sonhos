export function updateTitle() {
    const list_titles = [
        'Um raio de sol através da chuva',
        'O jardim das pessegueiras',
        'A tempestade',
        'O túnel',
        'Corvos',
        'Monte Fuji em chamas',
        'O demônio que chora',
        'O vilarejo dos moinhos'
    ];
    list_titles.forEach(function(item, index) {
        document.getElementById(`img-dream-${index + 1}`).addEventListener('mouseover', function() {
            document.getElementById('dream-title').innerHTML = item
        })
    })
    document.getElementById('meio').addEventListener('mouseover', function() {
        document.getElementById('dream-title').innerHTML = ''
    })
}
