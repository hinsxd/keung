<html>
    <head>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../stylesheets/adminpage.css">
        <title>Admin Panel</title>
    </head>

    <body class="wrapper">
        <?php
        $servername="localhost";
        $username = "root";
        $password = "12345678";
        $dbname = "shop";

        $conn = new mysqli($servername,$username, $password,$dbname);
        
        if (!$conn) {
            die("连接失败: " . $conn->connect_error);
        } 
        $sql = "select * from catorgory";
        $result = $conn->query($sql);
        
        ?>
        <div class="centerarea">
            <span class="title">Admin Panel</span>
        </div>
        <form class="formarea" action="../back-end/adminbackend.php"> 
            Product name:<br/>
            <input type="text" name="name" placeholder="Product name"/>
            <br/>
            Product price:<br/>
            <input type="number" min="0" name="name" oninput="validity.valid||(value='');" placeholder="Product price"/>
            <br/>
            Product catorgory:<br/>
            <select>
                <?php
                    while($row = fetch_assoc($result)) {
                        echo "<option>".$row["cid"]."</option>";
                    }
                ?>
            </select>
            <br/>
            Product image:<br/>
            <input type="file" name="pic" accept="image/">
            <br/>
            <input type="submit" value="Submit"/>
        </form>
        
    </body>
</html>