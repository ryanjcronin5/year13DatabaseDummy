<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dummy Data Database</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header class="base">
        <h1>Title</h1>
    </header>

    <section class="base">
        <p>Text talking about how you can search for members.</p>
    </section>

    <div class="base container_base">
        <section>
            <h3>Section</h3>
            <form action="read.php" method="post">
                <input type="text" id="searchInput" name="searchInput" placeholder="Search..." required>
                <div class="buttonGroup" style="width: 75%;">
                    <button class="button buttonSearch" type="button" onclick="sendInput()" style="width: 50%;">Search</button>
                    <button class="button buttonClear" type="button" onclick="clearSearch()" style="width: 50%;" disabled>Clear</button>
                </div>
            </form>
        </section>

        <aside>
			<table id="resultTable">
                <?php include 'includes/read.php';?>
            </table>
        </aside>

    </div>

    <footer class="base">
        <h3>Footer</h3>
    </footer>
    <script src="index.js"></script>

</body>
</html>