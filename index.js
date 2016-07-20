(function () {
    var data = [
        { ID: "000001", Name: "Admir Alicic", "E-mail": "admir.alicic@gmail.com" },
        { ID: "000002", Name: "John Wayne", "E-mail": "john.wayne@gmail.com" },
        { ID: "000003", Name: "Jim Morrison", "E-mail": "morissonj@gmail.com" },
        { ID: "000004", Name: "Angus Young", "E-mail": "youngt@gmail.com" },
        { ID: "000005", Name: "Chuck Norris", "E-mail": "chuck@gmail.com" },
        { ID: "000006", Name: "Tex Willer", "E-mail": "willert@gmail.com" },
        { ID: "000007", Name: "Morgan Freeman", "E-mail": "mfreeman@gmail.com" },
        { ID: "000008", Name: "Scarlet Johansson", "E-mail": "sjohansson@gmail.com" },
        { ID: "000009", Name: "Salma Hayek", "E-mail": "salma@gmail.com" }
    ];

    function createTable(data) {
        var table = document.createElement("table");
        var thead = document.createElement("thead");

        var fields = Object.keys(data[0]);
        var header = document.createElement("tr");
        fields.forEach(function (field) {
            var headerCell = document.createElement("th");
            headerCell.textContent = field;
            header.appendChild(headerCell);
        });
        thead.appendChild(header)
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        data.forEach(function (item) {
            var row = document.createElement("tr");
            fields.forEach(function (field) {
                var cell = document.createElement("td");
                if (field === "E-mail") {
                    var anchor = document.createElement("a");
                    var anchorText = document.createTextNode(item[field]);
                    anchor.appendChild(anchorText);
                    anchor.href = "#" + item[field];
                    anchor.title = item[field];
                    cell.appendChild(anchor);
                } else {
                    cell.textContent = item[field];
                }
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        return table;
    }
    document.body.appendChild(createTable(data));

} ());