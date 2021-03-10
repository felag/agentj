(function (t) {
// he
t.add("This value should be false.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05e9\u05e7\u05e8.", "validators", "he");
t.add("This value should be true.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05d0\u05de\u05ea.", "validators", "he");
t.add("This value should be of type {{ type }}.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05e1\u05d5\u05d2 {{ type }}.", "validators", "he");
t.add("This value should be blank.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05e8\u05d9\u05e7.", "validators", "he");
t.add("The value you selected is not a valid choice.", "\u05d4\u05e2\u05e8\u05da \u05e9\u05d1\u05d7\u05e8\u05ea \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.", "\u05d0\u05ea\u05d4 \u05e6\u05e8\u05d9\u05da \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05e4\u05d7\u05d5\u05ea {{ limit }} \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea.|\u05d0\u05ea\u05d4 \u05e6\u05e8\u05d9\u05da \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05e4\u05d7\u05d5\u05ea {{ limit }} \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea.", "validators", "he");
t.add("You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.", "\u05d0\u05ea\u05d4 \u05e6\u05e8\u05d9\u05da \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8 {{ limit }} \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea.|\u05d0\u05ea\u05d4 \u05e6\u05e8\u05d9\u05da \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8 {{ limit }} \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea.", "validators", "he");
t.add("One or more of the given values is invalid.", "\u05d0\u05d7\u05d3 \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8 \u05de\u05d4\u05e2\u05e8\u05db\u05d9\u05dd \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("This field was not expected.", "\u05e9\u05d3\u05d4 \u05d6\u05d4 \u05dc\u05d0 \u05d4\u05d9\u05d4 \u05e6\u05e4\u05d5\u05d9", "validators", "he");
t.add("This field is missing.", "\u05e9\u05d3\u05d4 \u05d6\u05d4 \u05d7\u05e1\u05e8.", "validators", "he");
t.add("This value is not a valid date.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05ea\u05d0\u05e8\u05d9\u05da \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("This value is not a valid datetime.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05e9\u05e2\u05d4 \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd.", "validators", "he");
t.add("This value is not a valid email address.", "\u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05de\u05d9\u05d9\u05dc \u05d0\u05d9\u05e0\u05d4 \u05ea\u05e7\u05d9\u05e0\u05d4.", "validators", "he");
t.add("The file could not be found.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0.", "validators", "he");
t.add("The file is not readable.", "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e7\u05e8\u05d5\u05d0 \u05d0\u05ea \u05d4\u05e7\u05d5\u05d1\u05e5.", "validators", "he");
t.add("The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9 ({{ size }} {{ suffix }}). \u05d4\u05d2\u05d5\u05d3\u05dc \u05d4\u05de\u05e8\u05d1\u05d9 \u05d4\u05de\u05d5\u05ea\u05e8 \u05d4\u05d5\u05d0 {{ limit }} {{ suffix }}.", "validators", "he");
t.add("The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.", "\u05e1\u05d5\u05d2 MIME \u05e9\u05dc \u05d4\u05e7\u05d5\u05d1\u05e5 \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9 ({{ type }}). \u05de\u05d5\u05ea\u05e8\u05d9\u05dd \u05e1\u05d5\u05d2\u05d9 MIME {{ types }}.", "validators", "he");
t.add("This value should be {{ limit }} or less.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05dc \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8.", "validators", "he");
t.add("This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05e8\u05d5\u05da \u05de\u05d9\u05d3\u05d9. \u05d4\u05d5\u05d0 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8.|\u05d4\u05e2\u05e8\u05da \u05d0\u05e8\u05d5\u05da \u05de\u05d9\u05d3\u05d9. \u05d4\u05d5\u05d0 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8.", "validators", "he");
t.add("This value should be {{ limit }} or more.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea.", "validators", "he");
t.add("This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.", "\u05d4\u05e2\u05e8\u05da \u05e7\u05e6\u05e8 \u05de\u05d9\u05d3\u05d9\u05e5 \u05d4\u05d5\u05d0 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea.|\u05d4\u05e2\u05e8\u05da \u05e7\u05e6\u05e8 \u05de\u05d9\u05d3\u05d9\u05e5 \u05d4\u05d5\u05d0 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea.", "validators", "he");
t.add("This value should not be blank.", "\u05d4\u05e2\u05e8\u05da \u05dc\u05d0 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05d9\u05d5\u05ea \u05e8\u05d9\u05e7.", "validators", "he");
t.add("This value should not be null.", "\u05d4\u05e2\u05e8\u05da \u05dc\u05d0 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05d9\u05d5\u05ea \u05e8\u05d9\u05e7.", "validators", "he");
t.add("This value should be null.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05e8\u05d9\u05e7.", "validators", "he");
t.add("This value is not valid.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("This value is not a valid time.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05d6\u05de\u05df \u05ea\u05e7\u05d9\u05df.", "validators", "he");
t.add("This value is not a valid URL.", "\u05d6\u05d0\u05ea \u05d0\u05d9\u05e0\u05d4 \u05db\u05ea\u05d5\u05d1\u05ea \u05d0\u05ea\u05e8 \u05ea\u05e7\u05d9\u05e0\u05d4.", "validators", "he");
t.add("The two values should be equal.", "\u05e9\u05e0\u05d9 \u05d4\u05e2\u05e8\u05db\u05d9\u05dd \u05e6\u05e8\u05d9\u05db\u05d9\u05dd \u05dc\u05d4\u05d9\u05d5\u05ea \u05e9\u05d5\u05d5\u05d9\u05dd.", "validators", "he");
t.add("The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9. \u05d4\u05d2\u05d5\u05d3\u05dc \u05d4\u05de\u05e8\u05d1\u05d9 \u05d4\u05de\u05d5\u05ea\u05e8 \u05d4\u05d5\u05d0 {{ limit }} {{ suffix }}.", "validators", "he");
t.add("The file is too large.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9.", "validators", "he");
t.add("The file could not be uploaded.", "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e2\u05dc\u05d5\u05ea \u05d0\u05ea \u05d4\u05e7\u05d5\u05d1\u05e5.", "validators", "he");
t.add("This value should be a valid number.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05e1\u05e4\u05e8 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("This file is not a valid image.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05ea\u05de\u05d5\u05e0\u05d4 \u05ea\u05e7\u05d9\u05e0\u05d4.", "validators", "he");
t.add("This is not a valid IP address.", "\u05d6\u05d5 \u05d0\u05d9\u05e0\u05d4 \u05db\u05ea\u05d5\u05d1\u05ea IP \u05d7\u05d5\u05e7\u05d9\u05ea.", "validators", "he");
t.add("This value is not a valid language.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05e9\u05e4\u05d4 \u05d7\u05d5\u05e7\u05d9\u05ea.", "validators", "he");
t.add("This value is not a valid locale.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05d0\u05d6\u05d5\u05e8 \u05ea\u05e7\u05e3.", "validators", "he");
t.add("This value is not a valid country.", "\u05d4\u05e2\u05e8\u05da \u05d0\u05d9\u05e0\u05d5 \u05d0\u05e8\u05e5 \u05d7\u05d5\u05e7\u05d9\u05ea.", "validators", "he");
t.add("This value is already used.", "\u05d4\u05e2\u05e8\u05da \u05db\u05d1\u05e8 \u05d1\u05e9\u05d9\u05de\u05d5\u05e9.", "validators", "he");
t.add("The size of the image could not be detected.", "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e7\u05d1\u05d5\u05e2 \u05d0\u05ea \u05d2\u05d5\u05d3\u05dc \u05d4\u05ea\u05de\u05d5\u05e0\u05d4.", "validators", "he");
t.add("The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.", "\u05e8\u05d5\u05d7\u05d1 \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9 ({{ width }}px). \u05d4\u05e8\u05d5\u05d7\u05d1 \u05d4\u05de\u05e7\u05e1\u05d9\u05de\u05dc\u05d9 \u05d4\u05d5\u05d0 {{ max_width }}px.", "validators", "he");
t.add("The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.", "\u05e8\u05d5\u05d7\u05d1 \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05e7\u05d8\u05df \u05de\u05d3\u05d9 ({{ width }}px). \u05d4\u05e8\u05d5\u05d7\u05d1 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05dc\u05d9 \u05d4\u05d5\u05d0 {{ min_width }}px.", "validators", "he");
t.add("The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.", "\u05d2\u05d5\u05d1\u05d4 \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9 ({{ height }}px). \u05d4\u05d2\u05d5\u05d1\u05d4 \u05d4\u05de\u05e7\u05e1\u05d9\u05de\u05dc\u05d9 \u05d4\u05d5\u05d0 {{ max_height }}px.", "validators", "he");
t.add("The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.", "\u05d2\u05d5\u05d1\u05d4 \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05e7\u05d8\u05df \u05de\u05d3\u05d9 ({{ height }}px). \u05d4\u05d2\u05d5\u05d1\u05d4 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05dc\u05d9 \u05d4\u05d5\u05d0 {{ min_height }}px.", "validators", "he");
t.add("This value should be the user's current password.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05ea \u05d4\u05de\u05e9\u05ea\u05de\u05e9 \u05d4\u05e0\u05d5\u05db\u05d7\u05d9.", "validators", "he");
t.add("This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.", "\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d3\u05d9\u05d5\u05e7 {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd.|\u05d4\u05e2\u05e8\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d3\u05d9\u05d5\u05e7 {{ limit }} \u05ea\u05d5\u05d5\u05d9\u05dd.", "validators", "he");
t.add("The file was only partially uploaded.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d0\u05d5\u05e4\u05df \u05d7\u05dc\u05e7\u05d9.", "validators", "he");
t.add("No file was uploaded.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05dc\u05d0 \u05d4\u05d5\u05e2\u05dc\u05d4.", "validators", "he");
t.add("No temporary folder was configured in php.ini.", "\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8\u05d4 \u05ea\u05d9\u05e7\u05d9\u05d9\u05d4 \u05d6\u05de\u05e0\u05d9\u05ea \u05d1 php.ini.", "validators", "he");
t.add("Cannot write temporary file to disk.", "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05db\u05ea\u05d5\u05d1 \u05e7\u05d5\u05d1\u05e5 \u05d6\u05de\u05e0\u05d9 \u05dc\u05d3\u05d9\u05e1\u05e7.", "validators", "he");
t.add("A PHP extension caused the upload to fail.", "\u05e1\u05d9\u05d5\u05de\u05ea PHP \u05d2\u05e8\u05dd \u05dc\u05d4\u05e2\u05dc\u05d0\u05d4 \u05dc\u05d4\u05d9\u05db\u05e9\u05dc.", "validators", "he");
t.add("This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.", "\u05d4\u05d0\u05d5\u05e1\u05e3 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8.|\u05d4\u05d0\u05d5\u05e1\u05e3 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8.", "validators", "he");
t.add("This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.", "\u05d4\u05d0\u05d5\u05e1\u05e3 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd \u05d0\u05d5 \u05e4\u05d7\u05d5\u05ea.|\u05d4\u05d0\u05d5\u05e1\u05e3 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05db\u05d9\u05dc {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd \u05d0\u05d5 \u05e4\u05d7\u05d5\u05ea.", "validators", "he");
t.add("This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.", "\u05d4\u05d0\u05d5\u05e1\u05e3 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc \u05d1\u05d3\u05d9\u05d5\u05e7 {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd.|\u05d4\u05d0\u05d5\u05e1\u05e3 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc \u05d1\u05d3\u05d9\u05d5\u05e7 {{ limit }} \u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd.", "validators", "he");
t.add("Invalid card number.", "\u05de\u05e1\u05e4\u05e8 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1 \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("Unsupported card type or invalid card number.", "\u05e1\u05d5\u05d2 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1 \u05d0\u05d9\u05e0\u05d5 \u05e0\u05ea\u05de\u05da \u05d0\u05d5 \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9.", "validators", "he");
t.add("This is not a valid International Bank Account Number (IBAN).", "This is not a valid International Bank Account Number (IBAN).", "validators", "he");
t.add("This value is not a valid ISBN-10.", "This value is not a valid ISBN-10.", "validators", "he");
t.add("This value is not a valid ISBN-13.", "This value is not a valid ISBN-13.", "validators", "he");
t.add("This value is neither a valid ISBN-10 nor a valid ISBN-13.", "This value is neither a valid ISBN-10 nor a valid ISBN-13.", "validators", "he");
t.add("This value is not a valid ISSN.", "This value is not a valid ISSN.", "validators", "he");
t.add("This value is not a valid currency.", "This value is not a valid currency.", "validators", "he");
t.add("This value should be equal to {{ compared_value }}.", "This value should be equal to {{ compared_value }}.", "validators", "he");
t.add("This value should be greater than {{ compared_value }}.", "This value should be greater than {{ compared_value }}.", "validators", "he");
t.add("This value should be greater than or equal to {{ compared_value }}.", "This value should be greater than or equal to {{ compared_value }}.", "validators", "he");
t.add("This value should be identical to {{ compared_value_type }} {{ compared_value }}.", "This value should be identical to {{ compared_value_type }} {{ compared_value }}.", "validators", "he");
t.add("This value should be less than {{ compared_value }}.", "This value should be less than {{ compared_value }}.", "validators", "he");
t.add("This value should be less than or equal to {{ compared_value }}.", "This value should be less than or equal to {{ compared_value }}.", "validators", "he");
t.add("This value should not be equal to {{ compared_value }}.", "This value should not be equal to {{ compared_value }}.", "validators", "he");
t.add("This value should not be identical to {{ compared_value_type }} {{ compared_value }}.", "This value should not be identical to {{ compared_value_type }} {{ compared_value }}.", "validators", "he");
t.add("The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.", "The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.", "validators", "he");
t.add("The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.", "The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.", "validators", "he");
t.add("The image is square ({{ width }}x{{ height }}px). Square images are not allowed.", "The image is square ({{ width }}x{{ height }}px). Square images are not allowed.", "validators", "he");
t.add("The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.", "The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.", "validators", "he");
t.add("The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.", "The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.", "validators", "he");
t.add("An empty file is not allowed.", "An empty file is not allowed.", "validators", "he");
t.add("This form should not contain extra fields.", "\u05d4\u05d8\u05d5\u05e4\u05e1 \u05dc\u05d0 \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05d9\u05dc \u05e9\u05d3\u05d5\u05ea \u05e0\u05d5\u05e1\u05e4\u05d9\u05dd.", "validators", "he");
t.add("The uploaded file was too large. Please try to upload a smaller file.", "\u05d4\u05e7\u05d5\u05d1\u05e5 \u05e9\u05d4\u05d5\u05e2\u05dc\u05d4 \u05d2\u05d3\u05d5\u05dc \u05de\u05d3\u05d9. \u05e0\u05e1\u05d4 \u05dc\u05d4\u05e2\u05dc\u05d5\u05ea \u05e7\u05d5\u05d1\u05e5 \u05e7\u05d8\u05df \u05d9\u05d5\u05ea\u05e8.", "validators", "he");
t.add("The CSRF token is invalid. Please try to resubmit the form.", "\u05d0\u05e1\u05d9\u05de\u05d5\u05df CSRF \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05dc\u05e9\u05dc\u05d5\u05d7 \u05e9\u05d5\u05d1 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1.", "validators", "he");
})(Translator);
