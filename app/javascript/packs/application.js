import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";

Rails.start();
Turbolinks.start();
ActiveStorage.start();
import "../stylesheets/application";
import "../channels";
import "../pages";
import "../controllers";
import "../main";

require("trix")
require("@rails/actiontext")