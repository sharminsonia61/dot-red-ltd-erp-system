<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="databasename";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";

 // $conn->close();
 ?>
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
  <?php
  $startDate = $endDate = $location =$order ="" ;

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $reg_date = test_input($_POST["date"]);

    $startDate = test_input($_POST["startDate"]);
    $endDate = test_input($_POST["endDate"]);
    $location = test_input($_POST["location"]);
    $order = test_input($_POST["order"]);

  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

<?php
echo "<h2>Here is the information :</h2>";
echo "Start Date: ";echo $startDate;
echo "<br>";
echo "End Date: ";echo $endDate;
echo "<br>";
echo "Select Location: ";echo $location;
echo "<br>";
echo "Select Order Type: ";echo $order;
echo "<br>";

?>

<?php
$stmt = $conn->prepare("INSERT INTO orders (startdate, endDate, location, order) VALUES (?, ?, ?, ?)");
$stmt->bind_param("iiss", $startdate, $endDate, $location, $order);
$stmt->execute();
 echo "successfully <br>";
$stmt->close();
$conn->close();
?>

</body>
</html>
