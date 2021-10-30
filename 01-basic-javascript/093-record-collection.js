// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    const tracks = "tracks";
    const emptyString = "";

    if (prop !== tracks && value !== emptyString) {
        records[id][prop] = value;
    } else if (prop === tracks && !records[id].hasOwnProperty(tracks)) {
        records[id].tracks = [value];
    } else if (prop === tracks && value !== emptyString) {
        records[id].tracks.push(value);
    } else if (value === emptyString) {
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');