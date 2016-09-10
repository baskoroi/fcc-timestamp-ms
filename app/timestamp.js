module.exports = function(req, res) {
    // retrieve input string from the route param and define result object
    var input = req.params.input;
    var result = { unix: null, natural: null };

    // convert Unix timestamp to its milliseconds' value before converting it
    // into a Date object
    if (!isNaN(Number(input))) input = Number(input) * 1000;

    // convert the input string into a Date object
    var date = new Date(input);

    // only modify `result` object if date is valid
    if (!isNaN(date.getTime())) {
        result.unix = date.getTime() / 1000;
        result.natural = date.toDateString();
    }

    // send the result as a JSON response
    res.json(result);
};