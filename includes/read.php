<?php
include("dbc_inc.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $searchTerm = $_GET["paramName"];
	$searchColumns = [
        "LastName",
        "FirstName",
        "DateofBirth",
        "Suburb",
        "City",
        "Phone",
        "Email"
    ];
	$whereClause = "";
    foreach ($searchColumns as $column) {
        if ($whereClause !== "") {
            $whereClause .= " OR ";
        }
        $whereClause .= "$column LIKE '%$searchTerm%'";
    }
	$sql = "SELECT u.LastName, u.FirstName, COALESCE(u.DateofBirth,'Not Listed') AS DateofBirth, COALESCE(a.Suburb, 'Not Listed') AS Suburb, COALESCE(a.City, 'Not Listed') AS City, COALESCE(c.Phone, 'Not Listed') AS Phone, COALESCE(c.Email, 'Not Listed') AS Email FROM users u LEFT JOIN address a ON u.AddressID = a.ID LEFT JOIN contact c ON u.ContactID = c.ID";
	
	if (!empty($whereClause)) {
        $sql .= " WHERE $whereClause ORDER BY u.LastName, u.FirstName, c.Phone";
    }
	
	$result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table id='resultTable'>";
        echo "<thead><tr><th>Last Name</th><th>First Name</th><th>Date of Birth</th><th>Suburb</th><th>City</th><th>Phone</th><th>Email</th></tr></thead>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["LastName"] . "</td>";
            echo "<td>" . $row["FirstName"] . "</td>";
            echo "<td>" . $row["DateofBirth"] . "</td>";
            echo "<td>" . $row["Suburb"] . "</td>";
            echo "<td>" . $row["City"] . "</td>";
            echo "<td>" . $row["Phone"] . "</td>";
            echo "<td>" . $row["Email"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "No results found.";
    }

    $conn->close();
}