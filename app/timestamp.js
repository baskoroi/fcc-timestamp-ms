module.exports = function(req, res) {
    // retrieve input string from the route param and define result object
    var input = req.params.input;
    var result = { unix: null, natural: null };

    // convert Unix timestamp to its milliseconds' value before converting it
    // into a Date object
    // NOTE: multiply input by 1000 (to milliseconds) -- will be divided by 1000
    // for `result.natural`
    if (!isNaN(Number(input))) input = Number(input) * 1000;

    // convert the input string into a Date object
    var date = new Date(input);

    // only modify `result` object if date is valid
    if (!isNaN(date.getTime())) {
        result.unix = date.getTime() / 1000;

        var month = '';
        switch(date.getMonth()) {
            case 0:
                month = 'January';
                break;
            case 1:
                month = 'February';
                break;
            case 2:
                month = 'March';
                break;
            case 3:
                month = 'April';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'June';
                break;
            case 6:
                month = 'July';
                break;
            case 7:
                month = 'August';
                break;
            case 8:
                month = 'September';
                break;
            case 9:
                month = 'October';
                break;
            case 10:
                month = 'November';
                break;
            case 11:
                month = 'December';
                break;
        };

        if (month !== '') {
            result.natural = month + ' ' + date.getDate() + ', ' + date.getFullYear();
        }
    }

    // send the result as a JSON response
    res.json(result);
};