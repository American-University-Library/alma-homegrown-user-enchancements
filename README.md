# Alma Homegrown UI Enchancements
Alma HUE is a Chrome Extention that tweaks elements of the [Alma](https://www.exlibrisgroup.com/products/alma-library-services-platform/) cloud-based library services platform. At present there are two enhancements:

### Routing Alerts

This alters the appearance of routing pop-up alerts triggered from the Return Item screen. It changes the header color and adds an image. This helps distinguish routing notes from others which might require less immediate staff actions.

![Note](images/routing_note.png)

### Markdown Lite

Use a modified version of markdown in Alma notes and the extention will process it into different text effects. Currently this feature works for pop up notes that display in the Return Item and Scan-In Item screens. By surrounding text in your notes with markdown characters you can:

||
|---|
|`##Increase the text size##`|
|`**Bold the text**`|
|`__Underline__`|
|`~~Strikethrough~~`|
|`*Italicize*`|
|`[Change color](blue)`|
|`Emojis` (supported emojis listed below)|

You can use any HTML compliant color syntax inside the parenthesis when changing color like `blue`, `#0000FF`, or `rgb(0,0,255)`.

![Note](images/markdown_lite_note.png)
![Output](images/markdown_lite.png)

## Getting Started Using the App

You can install the extention directly from the Chrome Web Store.

## With thanks to:

* [The HJ Alma Booster](https://github.com/hl-judaica-division/hj-alma-booster) which provided the general structure for changing visual elements in Alma from an extention.
* [Showdown](https://github.com/showdownjs/showdown). Markdown lite parsing is done with a stripped down verion of this full Markdown to HTML converter.
* [Freepik](http://www.freepik.com), the source for this extentions icons and a great resource overall.

## License

This project is licensed under the MIT License.

## Supported Emojis
||||
|---|---|---|
|`:+1:`:+1:|`:file_folder:`:file_folder:|`:police_car:`:police_car:|
|`:-1:`:-1:|`:film_projector:`:film_projector:|`:policewoman:`:policewoman:|
|`:100:`:100:|`:film_strip:`:film_strip:|`:poodle:`:poodle:|
|`:1234:`:1234:|`:fire:`:fire:|`:popcorn:`:popcorn:|
|`:1st_place_medal:`:1st_place_medal:|`:fire_engine:`:fire_engine:|`:post_office:`:post_office:|
|`:2nd_place_medal:`:2nd_place_medal:|`:fireworks:`:fireworks:|`:postal_horn:`:postal_horn:|
|`:3rd_place_medal:`:3rd_place_medal:|`:first_quarter_moon:`:first_quarter_moon:|`:postbox:`:postbox:|
|`:8ball:`:8ball:|`:first_quarter_moon_with_face:`:first_quarter_moon_with_face:|`:potable_water:`:potable_water:|
|`:a:`:a:|`:fish:`:fish:|`:potato:`:potato:|
|`:ab:`:ab:|`:fish_cake:`:fish_cake:|`:pouch:`:pouch:|
|`:abc:`:abc:|`:fishing_pole_and_fish:`:fishing_pole_and_fish:|`:poultry_leg:`:poultry_leg:|
|`:abcd:`:abcd:|`:fist_raised:`:fist_raised:|`:pound:`:pound:|
|`:accept:`:accept:|`:fist_left:`:fist_left:|`:rage:`:rage:|
|`:aerial_tramway:`:aerial_tramway:|`:fist_right:`:fist_right:|`:pouting_cat:`:pouting_cat:|
|`:airplane:`:airplane:|`:flags:`:flags:|`:pouting_man:`:pouting_man:|
|`:alarm_clock:`:alarm_clock:|`:flashlight:`:flashlight:|`:pray:`:pray:|
|`:alembic:`:alembic:|`:fleur_de_lis:`:fleur_de_lis:|`:prayer_beads:`:prayer_beads:|
|`:alien:`:alien:|`:flight_arrival:`:flight_arrival:|`:pregnant_woman:`:pregnant_woman:|
|`:ambulance:`:ambulance:|`:flight_departure:`:flight_departure:|`:previous_track_button:`:previous_track_button:|
|`:amphora:`:amphora:|`:floppy_disk:`:floppy_disk:|`:prince:`:prince:|
|`:anchor:`:anchor:|`:flower_playing_cards:`:flower_playing_cards:|`:princess:`:princess:|
|`:angel:`:angel:|`:flushed:`:flushed:|`:printer:`:printer:|
|`:anger:`:anger:|`:fog:`:fog:|`:purple_heart:`:purple_heart:|
|`:angry:`:angry:|`:foggy:`:foggy:|`:purse:`:purse:|
|`:anguished:`:anguished:|`:football:`:football:|`:pushpin:`:pushpin:|
|`:ant:`:ant:|`:footprints:`:footprints:|`:put_litter_in_its_place:`:put_litter_in_its_place:|
|`:apple:`:apple:|`:fork_and_knife:`:fork_and_knife:|`:question:`:question:|
|`:aquarius:`:aquarius:|`:fountain:`:fountain:|`:rabbit:`:rabbit:|
|`:aries:`:aries:|`:fountain_pen:`:fountain_pen:|`:rabbit2:`:rabbit2:|
|`:arrow_backward:`:arrow_backward:|`:four_leaf_clover:`:four_leaf_clover:|`:racehorse:`:racehorse:|
|`:arrow_double_down:`:arrow_double_down:|`:fox_face:`:fox_face:|`:racing_car:`:racing_car:|
|`:arrow_double_up:`:arrow_double_up:|`:framed_picture:`:framed_picture:|`:radio:`:radio:|
|`:arrow_down:`:arrow_down:|`:free:`:free:|`:radio_button:`:radio_button:|
|`:arrow_down_small:`:arrow_down_small:|`:fried_egg:`:fried_egg:|`:radioactive:`:radioactive:|
|`:arrow_forward:`:arrow_forward:|`:fried_shrimp:`:fried_shrimp:|`:railway_car:`:railway_car:|
|`:arrow_heading_down:`:arrow_heading_down:|`:fries:`:fries:|`:railway_track:`:railway_track:|
|`:arrow_heading_up:`:arrow_heading_up:|`:frog:`:frog:|`:rainbow:`:rainbow:|
|`:arrow_left:`:arrow_left:|`:frowning:`:frowning:|`:rainbow_flag:`:rainbow_flag:|
|`:arrow_lower_left:`:arrow_lower_left:|`:frowning_face:`:frowning_face:|`:raised_back_of_hand:`:raised_back_of_hand:|
|`:arrow_lower_right:`:arrow_lower_right:|`:frowning_man:`:frowning_man:|`:raised_hand_with_fingers_splayed:`:raised_hand_with_fingers_splayed:|
|`:arrow_right:`:arrow_right:|`:frowning_woman:`:frowning_woman:|`:raised_hands:`:raised_hands:|
|`:arrow_right_hook:`:arrow_right_hook:|`:middle_finger:`:middle_finger:|`:raising_hand_woman:`:raising_hand_woman:|
|`:arrow_up:`:arrow_up:|`:fuelpump:`:fuelpump:|`:raising_hand_man:`:raising_hand_man:|
|`:arrow_up_down:`:arrow_up_down:|`:full_moon:`:full_moon:|`:ram:`:ram:|
|`:arrow_up_small:`:arrow_up_small:|`:full_moon_with_face:`:full_moon_with_face:|`:ramen:`:ramen:|
|`:arrow_upper_left:`:arrow_upper_left:|`:funeral_urn:`:funeral_urn:|`:rat:`:rat:|
|`:arrow_upper_right:`:arrow_upper_right:|`:game_die:`:game_die:|`:record_button:`:record_button:|
|`:arrows_clockwise:`:arrows_clockwise:|`:gear:`:gear:|`:recycle:`:recycle:|
|`:arrows_counterclockwise:`:arrows_counterclockwise:|`:gem:`:gem:|`:red_circle:`:red_circle:|
|`:art:`:art:|`:gemini:`:gemini:|`:registered:`:registered:|
|`:articulated_lorry:`:articulated_lorry:|`:ghost:`:ghost:|`:relaxed:`:relaxed:|
|`:artificial_satellite:`:artificial_satellite:|`:gift:`:gift:|`:relieved:`:relieved:|
|`:astonished:`:astonished:|`:gift_heart:`:gift_heart:|`:reminder_ribbon:`:reminder_ribbon:|
|`:athletic_shoe:`:athletic_shoe:|`:girl:`:girl:|`:repeat:`:repeat:|
|`:atm:`:atm:|`:globe_with_meridians:`:globe_with_meridians:|`:repeat_one:`:repeat_one:|
|`:atom_symbol:`:atom_symbol:|`:goal_net:`:goal_net:|`:rescue_worker_helmet:`:rescue_worker_helmet:|
|`:avocado:`:avocado:|`:goat:`:goat:|`:restroom:`:restroom:|
|`:b:`:b:|`:golf:`:golf:|`:revolving_hearts:`:revolving_hearts:|
|`:baby:`:baby:|`:golfing_man:`:golfing_man:|`:rewind:`:rewind:|
|`:baby_bottle:`:baby_bottle:|`:golfing_woman:`:golfing_woman:|`:rhinoceros:`:rhinoceros:|
|`:baby_chick:`:baby_chick:|`:gorilla:`:gorilla:|`:ribbon:`:ribbon:|
|`:baby_symbol:`:baby_symbol:|`:grapes:`:grapes:|`:rice:`:rice:|
|`:back:`:back:|`:green_apple:`:green_apple:|`:rice_ball:`:rice_ball:|
|`:bacon:`:bacon:|`:green_book:`:green_book:|`:rice_cracker:`:rice_cracker:|
|`:badminton:`:badminton:|`:green_heart:`:green_heart:|`:rice_scene:`:rice_scene:|
|`:baggage_claim:`:baggage_claim:|`:green_salad:`:green_salad:|`:right_anger_bubble:`:right_anger_bubble:|
|`:baguette_bread:`:baguette_bread:|`:grey_exclamation:`:grey_exclamation:|`:ring:`:ring:|
|`:balance_scale:`:balance_scale:|`:grey_question:`:grey_question:|`:robot:`:robot:|
|`:balloon:`:balloon:|`:grimacing:`:grimacing:|`:rocket:`:rocket:|
|`:ballot_box:`:ballot_box:|`:grin:`:grin:|`:rofl:`:rofl:|
|`:ballot_box_with_check:`:ballot_box_with_check:|`:grinning:`:grinning:|`:roll_eyes:`:roll_eyes:|
|`:bamboo:`:bamboo:|`:guardsman:`:guardsman:|`:roller_coaster:`:roller_coaster:|
|`:banana:`:banana:|`:guardswoman:`:guardswoman:|`:rooster:`:rooster:|
|`:bangbang:`:bangbang:|`:guitar:`:guitar:|`:rose:`:rose:|
|`:bank:`:bank:|`:gun:`:gun:|`:rosette:`:rosette:|
|`:bar_chart:`:bar_chart:|`:haircut_woman:`:haircut_woman:|`:rotating_light:`:rotating_light:|
|`:barber:`:barber:|`:haircut_man:`:haircut_man:|`:round_pushpin:`:round_pushpin:|
|`:baseball:`:baseball:|`:hamburger:`:hamburger:|`:rowing_man:`:rowing_man:|
|`:basketball:`:basketball:|`:hammer:`:hammer:|`:rowing_woman:`:rowing_woman:|
|`:basketball_man:`:basketball_man:|`:hammer_and_pick:`:hammer_and_pick:|`:rugby_football:`:rugby_football:|
|`:basketball_woman:`:basketball_woman:|`:hammer_and_wrench:`:hammer_and_wrench:|`:running_man:`:running_man:|
|`:bat:`:bat:|`:hamster:`:hamster:|`:running_shirt_with_sash:`:running_shirt_with_sash:|
|`:bath:`:bath:|`:hand:`:hand:|`:running_woman:`:running_woman:|
|`:bathtub:`:bathtub:|`:handbag:`:handbag:|`:sa:`:sa:|
|`:battery:`:battery:|`:handshake:`:handshake:|`:sagittarius:`:sagittarius:|
|`:beach_umbrella:`:beach_umbrella:|`:hankey:`:hankey:|`:sake:`:sake:|
|`:bear:`:bear:|`:hatched_chick:`:hatched_chick:|`:sandal:`:sandal:|
|`:bed:`:bed:|`:hatching_chick:`:hatching_chick:|`:santa:`:santa:|
|`:bee:`:bee:|`:headphones:`:headphones:|`:satellite:`:satellite:|
|`:beer:`:beer:|`:hear_no_evil:`:hear_no_evil:|`:saxophone:`:saxophone:|
|`:beers:`:beers:|`:heart:`:heart:|`:school:`:school:|
|`:beetle:`:beetle:|`:heart_decoration:`:heart_decoration:|`:school_satchel:`:school_satchel:|
|`:beginner:`:beginner:|`:heart_eyes:`:heart_eyes:|`:scissors:`:scissors:|
|`:bell:`:bell:|`:heart_eyes_cat:`:heart_eyes_cat:|`:scorpion:`:scorpion:|
|`:bellhop_bell:`:bellhop_bell:|`:heartbeat:`:heartbeat:|`:scorpius:`:scorpius:|
|`:bento:`:bento:|`:heartpulse:`:heartpulse:|`:scream:`:scream:|
|`:biking_man:`:biking_man:|`:hearts:`:hearts:|`:scream_cat:`:scream_cat:|
|`:bike:`:bike:|`:heavy_check_mark:`:heavy_check_mark:|`:scroll:`:scroll:|
|`:biking_woman:`:biking_woman:|`:heavy_division_sign:`:heavy_division_sign:|`:seat:`:seat:|
|`:bikini:`:bikini:|`:heavy_dollar_sign:`:heavy_dollar_sign:|`:secret:`:secret:|
|`:biohazard:`:biohazard:|`:heavy_heart_exclamation:`:heavy_heart_exclamation:|`:see_no_evil:`:see_no_evil:|
|`:bird:`:bird:|`:heavy_minus_sign:`:heavy_minus_sign:|`:seedling:`:seedling:|
|`:birthday:`:birthday:|`:heavy_multiplication_x:`:heavy_multiplication_x:|`:selfie:`:selfie:|
|`:black_circle:`:black_circle:|`:heavy_plus_sign:`:heavy_plus_sign:|`:shallow_pan_of_food:`:shallow_pan_of_food:|
|`:black_flag:`:black_flag:|`:helicopter:`:helicopter:|`:shamrock:`:shamrock:|
|`:black_heart:`:black_heart:|`:herb:`:herb:|`:shark:`:shark:|
|`:black_joker:`:black_joker:|`:hibiscus:`:hibiscus:|`:shaved_ice:`:shaved_ice:|
|`:black_large_square:`:black_large_square:|`:high_brightness:`:high_brightness:|`:sheep:`:sheep:|
|`:black_medium_small_square:`:black_medium_small_square:|`:high_heel:`:high_heel:|`:shell:`:shell:|
|`:black_medium_square:`:black_medium_square:|`:hocho:`:hocho:|`:shield:`:shield:|
|`:black_nib:`:black_nib:|`:hole:`:hole:|`:shinto_shrine:`:shinto_shrine:|
|`:black_small_square:`:black_small_square:|`:honey_pot:`:honey_pot:|`:ship:`:ship:|
|`:black_square_button:`:black_square_button:|`:horse:`:horse:|`:shirt:`:shirt:|
|`:blonde_man:`:blonde_man:|`:horse_racing:`:horse_racing:|`:shopping:`:shopping:|
|`:blonde_woman:`:blonde_woman:|`:hospital:`:hospital:|`:shopping_cart:`:shopping_cart:|
|`:blossom:`:blossom:|`:hot_pepper:`:hot_pepper:|`:shower:`:shower:|
|`:blowfish:`:blowfish:|`:hotdog:`:hotdog:|`:shrimp:`:shrimp:|
|`:blue_book:`:blue_book:|`:hotel:`:hotel:|`:signal_strength:`:signal_strength:|
|`:blue_car:`:blue_car:|`:hotsprings:`:hotsprings:|`:six_pointed_star:`:six_pointed_star:|
|`:blue_heart:`:blue_heart:|`:hourglass:`:hourglass:|`:ski:`:ski:|
|`:blush:`:blush:|`:hourglass_flowing_sand:`:hourglass_flowing_sand:|`:skier:`:skier:|
|`:boar:`:boar:|`:house:`:house:|`:skull:`:skull:|
|`:boat:`:boat:|`:house_with_garden:`:house_with_garden:|`:skull_and_crossbones:`:skull_and_crossbones:|
|`:bomb:`:bomb:|`:houses:`:houses:|`:sleeping:`:sleeping:|
|`:book:`:book:|`:hugs:`:hugs:|`:sleeping_bed:`:sleeping_bed:|
|`:bookmark:`:bookmark:|`:hushed:`:hushed:|`:sleepy:`:sleepy:|
|`:bookmark_tabs:`:bookmark_tabs:|`:ice_cream:`:ice_cream:|`:slightly_frowning_face:`:slightly_frowning_face:|
|`:books:`:books:|`:ice_hockey:`:ice_hockey:|`:slightly_smiling_face:`:slightly_smiling_face:|
|`:boom:`:boom:|`:ice_skate:`:ice_skate:|`:slot_machine:`:slot_machine:|
|`:boot:`:boot:|`:icecream:`:icecream:|`:small_airplane:`:small_airplane:|
|`:bouquet:`:bouquet:|`:id:`:id:|`:small_blue_diamond:`:small_blue_diamond:|
|`:bowing_man:`:bowing_man:|`:ideograph_advantage:`:ideograph_advantage:|`:small_orange_diamond:`:small_orange_diamond:|
|`:bow_and_arrow:`:bow_and_arrow:|`:imp:`:imp:|`:small_red_triangle:`:small_red_triangle:|
|`:bowing_woman:`:bowing_woman:|`:inbox_tray:`:inbox_tray:|`:small_red_triangle_down:`:small_red_triangle_down:|
|`:bowling:`:bowling:|`:incoming_envelope:`:incoming_envelope:|`:smile:`:smile:|
|`:boxing_glove:`:boxing_glove:|`:tipping_hand_woman:`:tipping_hand_woman:|`:smile_cat:`:smile_cat:|
|`:boy:`:boy:|`:information_source:`:information_source:|`:smiley:`:smiley:|
|`:bread:`:bread:|`:innocent:`:innocent:|`:smiley_cat:`:smiley_cat:|
|`:bride_with_veil:`:bride_with_veil:|`:interrobang:`:interrobang:|`:smiling_imp:`:smiling_imp:|
|`:bridge_at_night:`:bridge_at_night:|`:iphone:`:iphone:|`:smirk:`:smirk:|
|`:briefcase:`:briefcase:|`:izakaya_lantern:`:izakaya_lantern:|`:smirk_cat:`:smirk_cat:|
|`:broken_heart:`:broken_heart:|`:jack_o_lantern:`:jack_o_lantern:|`:smoking:`:smoking:|
|`:bug:`:bug:|`:japan:`:japan:|`:snail:`:snail:|
|`:building_construction:`:building_construction:|`:japanese_castle:`:japanese_castle:|`:snake:`:snake:|
|`:bulb:`:bulb:|`:japanese_goblin:`:japanese_goblin:|`:sneezing_face:`:sneezing_face:|
|`:bullettrain_front:`:bullettrain_front:|`:japanese_ogre:`:japanese_ogre:|`:snowboarder:`:snowboarder:|
|`:bullettrain_side:`:bullettrain_side:|`:jeans:`:jeans:|`:snowflake:`:snowflake:|
|`:burrito:`:burrito:|`:joy:`:joy:|`:snowman:`:snowman:|
|`:bus:`:bus:|`:joy_cat:`:joy_cat:|`:snowman_with_snow:`:snowman_with_snow:|
|`:business_suit_levitating:`:business_suit_levitating:|`:joystick:`:joystick:|`:sob:`:sob:|
|`:busstop:`:busstop:|`:kaaba:`:kaaba:|`:soccer:`:soccer:|
|`:bust_in_silhouette:`:bust_in_silhouette:|`:key:`:key:|`:soon:`:soon:|
|`:busts_in_silhouette:`:busts_in_silhouette:|`:keyboard:`:keyboard:|`:sos:`:sos:|
|`:butterfly:`:butterfly:|`:keycap_ten:`:keycap_ten:|`:sound:`:sound:|
|`:cactus:`:cactus:|`:kick_scooter:`:kick_scooter:|`:space_invader:`:space_invader:|
|`:cake:`:cake:|`:kimono:`:kimono:|`:spades:`:spades:|
|`:calendar:`:calendar:|`:kiss:`:kiss:|`:spaghetti:`:spaghetti:|
|`:call_me_hand:`:call_me_hand:|`:kissing:`:kissing:|`:sparkle:`:sparkle:|
|`:calling:`:calling:|`:kissing_cat:`:kissing_cat:|`:sparkler:`:sparkler:|
|`:camel:`:camel:|`:kissing_closed_eyes:`:kissing_closed_eyes:|`:sparkles:`:sparkles:|
|`:camera:`:camera:|`:kissing_heart:`:kissing_heart:|`:sparkling_heart:`:sparkling_heart:|
|`:camera_flash:`:camera_flash:|`:kissing_smiling_eyes:`:kissing_smiling_eyes:|`:speak_no_evil:`:speak_no_evil:|
|`:camping:`:camping:|`:kiwi_fruit:`:kiwi_fruit:|`:speaker:`:speaker:|
|`:cancer:`:cancer:|`:koala:`:koala:|`:speaking_head:`:speaking_head:|
|`:candle:`:candle:|`:koko:`:koko:|`:speech_balloon:`:speech_balloon:|
|`:candy:`:candy:|`:label:`:label:|`:speedboat:`:speedboat:|
|`:canoe:`:canoe:|`:large_blue_circle:`:large_blue_circle:|`:spider:`:spider:|
|`:capital_abcd:`:capital_abcd:|`:large_blue_diamond:`:large_blue_diamond:|`:spider_web:`:spider_web:|
|`:capricorn:`:capricorn:|`:large_orange_diamond:`:large_orange_diamond:|`:spiral_calendar:`:spiral_calendar:|
|`:car:`:car:|`:last_quarter_moon:`:last_quarter_moon:|`:spiral_notepad:`:spiral_notepad:|
|`:card_file_box:`:card_file_box:|`:last_quarter_moon_with_face:`:last_quarter_moon_with_face:|`:spoon:`:spoon:|
|`:card_index:`:card_index:|`:latin_cross:`:latin_cross:|`:squid:`:squid:|
|`:card_index_dividers:`:card_index_dividers:|`:laughing:`:laughing:|`:stadium:`:stadium:|
|`:carousel_horse:`:carousel_horse:|`:leaves:`:leaves:|`:star:`:star:|
|`:carrot:`:carrot:|`:ledger:`:ledger:|`:star2:`:star2:|
|`:cat:`:cat:|`:left_luggage:`:left_luggage:|`:star_and_crescent:`:star_and_crescent:|
|`:cat2:`:cat2:|`:left_right_arrow:`:left_right_arrow:|`:star_of_david:`:star_of_david:|
|`:cd:`:cd:|`:leftwards_arrow_with_hook:`:leftwards_arrow_with_hook:|`:stars:`:stars:|
|`:chains:`:chains:|`:lemon:`:lemon:|`:station:`:station:|
|`:champagne:`:champagne:|`:leo:`:leo:|`:statue_of_liberty:`:statue_of_liberty:|
|`:chart:`:chart:|`:leopard:`:leopard:|`:steam_locomotive:`:steam_locomotive:|
|`:chart_with_downwards_trend:`:chart_with_downwards_trend:|`:level_slider:`:level_slider:|`:stew:`:stew:|
|`:chart_with_upwards_trend:`:chart_with_upwards_trend:|`:libra:`:libra:|`:stop_button:`:stop_button:|
|`:checkered_flag:`:checkered_flag:|`:light_rail:`:light_rail:|`:stop_sign:`:stop_sign:|
|`:cheese:`:cheese:|`:link:`:link:|`:stopwatch:`:stopwatch:|
|`:cherries:`:cherries:|`:lion:`:lion:|`:straight_ruler:`:straight_ruler:|
|`:cherry_blossom:`:cherry_blossom:|`:lips:`:lips:|`:strawberry:`:strawberry:|
|`:chestnut:`:chestnut:|`:lipstick:`:lipstick:|`:stuck_out_tongue:`:stuck_out_tongue:|
|`:chicken:`:chicken:|`:lizard:`:lizard:|`:stuck_out_tongue_closed_eyes:`:stuck_out_tongue_closed_eyes:|
|`:children_crossing:`:children_crossing:|`:lock:`:lock:|`:stuck_out_tongue_winking_eye:`:stuck_out_tongue_winking_eye:|
|`:chipmunk:`:chipmunk:|`:lock_with_ink_pen:`:lock_with_ink_pen:|`:studio_microphone:`:studio_microphone:|
|`:chocolate_bar:`:chocolate_bar:|`:lollipop:`:lollipop:|`:stuffed_flatbread:`:stuffed_flatbread:|
|`:christmas_tree:`:christmas_tree:|`:loop:`:loop:|`:sun_behind_large_cloud:`:sun_behind_large_cloud:|
|`:church:`:church:|`:loud_sound:`:loud_sound:|`:sun_behind_rain_cloud:`:sun_behind_rain_cloud:|
|`:cinema:`:cinema:|`:loudspeaker:`:loudspeaker:|`:sun_behind_small_cloud:`:sun_behind_small_cloud:|
|`:circus_tent:`:circus_tent:|`:love_hotel:`:love_hotel:|`:sun_with_face:`:sun_with_face:|
|`:city_sunrise:`:city_sunrise:|`:love_letter:`:love_letter:|`:sunflower:`:sunflower:|
|`:city_sunset:`:city_sunset:|`:low_brightness:`:low_brightness:|`:sunglasses:`:sunglasses:|
|`:cityscape:`:cityscape:|`:lying_face:`:lying_face:|`:sunny:`:sunny:|
|`:cl:`:cl:|`:m:`:m:|`:sunrise:`:sunrise:|
|`:clamp:`:clamp:|`:mag:`:mag:|`:sunrise_over_mountains:`:sunrise_over_mountains:|
|`:clap:`:clap:|`:mag_right:`:mag_right:|`:surfing_man:`:surfing_man:|
|`:clapper:`:clapper:|`:mahjong:`:mahjong:|`:surfing_woman:`:surfing_woman:|
|`:classical_building:`:classical_building:|`:mailbox:`:mailbox:|`:sushi:`:sushi:|
|`:clinking_glasses:`:clinking_glasses:|`:mailbox_closed:`:mailbox_closed:|`:suspension_railway:`:suspension_railway:|
|`:clipboard:`:clipboard:|`:mailbox_with_mail:`:mailbox_with_mail:|`:sweat:`:sweat:|
|`:clock1:`:clock1:|`:mailbox_with_no_mail:`:mailbox_with_no_mail:|`:sweat_drops:`:sweat_drops:|
|`:clock10:`:clock10:|`:man:`:man:|`:sweat_smile:`:sweat_smile:|
|`:clock1030:`:clock1030:|`:man_artist:`:man_artist:|`:sweet_potato:`:sweet_potato:|
|`:clock11:`:clock11:|`:man_astronaut:`:man_astronaut:|`:swimming_man:`:swimming_man:|
|`:clock1130:`:clock1130:|`:man_cartwheeling:`:man_cartwheeling:|`:swimming_woman:`:swimming_woman:|
|`:clock12:`:clock12:|`:man_cook:`:man_cook:|`:symbols:`:symbols:|
|`:clock1230:`:clock1230:|`:man_dancing:`:man_dancing:|`:synagogue:`:synagogue:|
|`:clock130:`:clock130:|`:man_facepalming:`:man_facepalming:|`:syringe:`:syringe:|
|`:clock2:`:clock2:|`:man_factory_worker:`:man_factory_worker:|`:taco:`:taco:|
|`:clock230:`:clock230:|`:man_farmer:`:man_farmer:|`:tada:`:tada:|
|`:clock3:`:clock3:|`:man_firefighter:`:man_firefighter:|`:tanabata_tree:`:tanabata_tree:|
|`:clock330:`:clock330:|`:man_health_worker:`:man_health_worker:|`:taurus:`:taurus:|
|`:clock4:`:clock4:|`:man_in_tuxedo:`:man_in_tuxedo:|`:taxi:`:taxi:|
|`:clock430:`:clock430:|`:man_judge:`:man_judge:|`:tea:`:tea:|
|`:clock5:`:clock5:|`:man_juggling:`:man_juggling:|`:telephone_receiver:`:telephone_receiver:|
|`:clock530:`:clock530:|`:man_mechanic:`:man_mechanic:|`:telescope:`:telescope:|
|`:clock6:`:clock6:|`:man_office_worker:`:man_office_worker:|`:tennis:`:tennis:|
|`:clock630:`:clock630:|`:man_pilot:`:man_pilot:|`:tent:`:tent:|
|`:clock7:`:clock7:|`:man_playing_handball:`:man_playing_handball:|`:thermometer:`:thermometer:|
|`:clock730:`:clock730:|`:man_playing_water_polo:`:man_playing_water_polo:|`:thinking:`:thinking:|
|`:clock8:`:clock8:|`:man_scientist:`:man_scientist:|`:thought_balloon:`:thought_balloon:|
|`:clock830:`:clock830:|`:man_shrugging:`:man_shrugging:|`:ticket:`:ticket:|
|`:clock9:`:clock9:|`:man_singer:`:man_singer:|`:tickets:`:tickets:|
|`:clock930:`:clock930:|`:man_student:`:man_student:|`:tiger:`:tiger:|
|`:closed_book:`:closed_book:|`:man_teacher:`:man_teacher:|`:tiger2:`:tiger2:|
|`:closed_lock_with_key:`:closed_lock_with_key:|`:man_technologist:`:man_technologist:|`:timer_clock:`:timer_clock:|
|`:closed_umbrella:`:closed_umbrella:|`:man_with_gua_pi_mao:`:man_with_gua_pi_mao:|`:tipping_hand_man:`:tipping_hand_man:|
|`:cloud:`:cloud:|`:man_with_turban:`:man_with_turban:|`:tired_face:`:tired_face:|
|`:cloud_with_lightning:`:cloud_with_lightning:|`:tangerine:`:tangerine:|`:tm:`:tm:|
|`:cloud_with_lightning_and_rain:`:cloud_with_lightning_and_rain:|`:mans_shoe:`:mans_shoe:|`:toilet:`:toilet:|
|`:cloud_with_rain:`:cloud_with_rain:|`:mantelpiece_clock:`:mantelpiece_clock:|`:tokyo_tower:`:tokyo_tower:|
|`:cloud_with_snow:`:cloud_with_snow:|`:maple_leaf:`:maple_leaf:|`:tomato:`:tomato:|
|`:clown_face:`:clown_face:|`:martial_arts_uniform:`:martial_arts_uniform:|`:tongue:`:tongue:|
|`:clubs:`:clubs:|`:mask:`:mask:|`:top:`:top:|
|`:cocktail:`:cocktail:|`:massage_woman:`:massage_woman:|`:tophat:`:tophat:|
|`:coffee:`:coffee:|`:massage_man:`:massage_man:|`:tornado:`:tornado:|
|`:coffin:`:coffin:|`:meat_on_bone:`:meat_on_bone:|`:trackball:`:trackball:|
|`:cold_sweat:`:cold_sweat:|`:medal_military:`:medal_military:|`:tractor:`:tractor:|
|`:comet:`:comet:|`:medal_sports:`:medal_sports:|`:traffic_light:`:traffic_light:|
|`:computer:`:computer:|`:mega:`:mega:|`:train:`:train:|
|`:computer_mouse:`:computer_mouse:|`:melon:`:melon:|`:train2:`:train2:|
|`:confetti_ball:`:confetti_ball:|`:memo:`:memo:|`:tram:`:tram:|
|`:confounded:`:confounded:|`:men_wrestling:`:men_wrestling:|`:triangular_flag_on_post:`:triangular_flag_on_post:|
|`:confused:`:confused:|`:menorah:`:menorah:|`:triangular_ruler:`:triangular_ruler:|
|`:congratulations:`:congratulations:|`:mens:`:mens:|`:trident:`:trident:|
|`:construction:`:construction:|`:metal:`:metal:|`:triumph:`:triumph:|
|`:construction_worker_man:`:construction_worker_man:|`:metro:`:metro:|`:trolleybus:`:trolleybus:|
|`:construction_worker_woman:`:construction_worker_woman:|`:microphone:`:microphone:|`:trophy:`:trophy:|
|`:control_knobs:`:control_knobs:|`:microscope:`:microscope:|`:tropical_drink:`:tropical_drink:|
|`:convenience_store:`:convenience_store:|`:milk_glass:`:milk_glass:|`:tropical_fish:`:tropical_fish:|
|`:cookie:`:cookie:|`:milky_way:`:milky_way:|`:truck:`:truck:|
|`:cool:`:cool:|`:minibus:`:minibus:|`:trumpet:`:trumpet:|
|`:policeman:`:policeman:|`:minidisc:`:minidisc:|`:tulip:`:tulip:|
|`:copyright:`:copyright:|`:mobile_phone_off:`:mobile_phone_off:|`:tumbler_glass:`:tumbler_glass:|
|`:corn:`:corn:|`:money_mouth_face:`:money_mouth_face:|`:turkey:`:turkey:|
|`:couch_and_lamp:`:couch_and_lamp:|`:money_with_wings:`:money_with_wings:|`:turtle:`:turtle:|
|`:couple:`:couple:|`:moneybag:`:moneybag:|`:tv:`:tv:|
|`:couple_with_heart_woman_man:`:couple_with_heart_woman_man:|`:monkey:`:monkey:|`:twisted_rightwards_arrows:`:twisted_rightwards_arrows:|
|`:couple_with_heart_man_man:`:couple_with_heart_man_man:|`:monkey_face:`:monkey_face:|`:two_hearts:`:two_hearts:|
|`:couple_with_heart_woman_woman:`:couple_with_heart_woman_woman:|`:monorail:`:monorail:|`:two_men_holding_hands:`:two_men_holding_hands:|
|`:couplekiss_man_man:`:couplekiss_man_man:|`:moon:`:moon:|`:two_women_holding_hands:`:two_women_holding_hands:|
|`:couplekiss_man_woman:`:couplekiss_man_woman:|`:mortar_board:`:mortar_board:|`:u5272:`:u5272:|
|`:couplekiss_woman_woman:`:couplekiss_woman_woman:|`:mosque:`:mosque:|`:u5408:`:u5408:|
|`:cow:`:cow:|`:motor_boat:`:motor_boat:|`:u55b6:`:u55b6:|
|`:cow2:`:cow2:|`:motor_scooter:`:motor_scooter:|`:u6307:`:u6307:|
|`:cowboy_hat_face:`:cowboy_hat_face:|`:motorcycle:`:motorcycle:|`:u6708:`:u6708:|
|`:crab:`:crab:|`:motorway:`:motorway:|`:u6709:`:u6709:|
|`:crayon:`:crayon:|`:mount_fuji:`:mount_fuji:|`:u6e80:`:u6e80:|
|`:credit_card:`:credit_card:|`:mountain:`:mountain:|`:u7121:`:u7121:|
|`:crescent_moon:`:crescent_moon:|`:mountain_biking_man:`:mountain_biking_man:|`:u7533:`:u7533:|
|`:cricket:`:cricket:|`:mountain_biking_woman:`:mountain_biking_woman:|`:u7981:`:u7981:|
|`:crocodile:`:crocodile:|`:mountain_cableway:`:mountain_cableway:|`:u7a7a:`:u7a7a:|
|`:croissant:`:croissant:|`:mountain_railway:`:mountain_railway:|`:umbrella:`:umbrella:|
|`:crossed_fingers:`:crossed_fingers:|`:mountain_snow:`:mountain_snow:|`:unamused:`:unamused:|
|`:crossed_flags:`:crossed_flags:|`:mouse:`:mouse:|`:underage:`:underage:|
|`:crossed_swords:`:crossed_swords:|`:mouse2:`:mouse2:|`:unicorn:`:unicorn:|
|`:crown:`:crown:|`:movie_camera:`:movie_camera:|`:unlock:`:unlock:|
|`:cry:`:cry:|`:moyai:`:moyai:|`:up:`:up:|
|`:crying_cat_face:`:crying_cat_face:|`:mrs_claus:`:mrs_claus:|`:upside_down_face:`:upside_down_face:|
|`:crystal_ball:`:crystal_ball:|`:muscle:`:muscle:|`:v:`:v:|
|`:cucumber:`:cucumber:|`:mushroom:`:mushroom:|`:vertical_traffic_light:`:vertical_traffic_light:|
|`:cupid:`:cupid:|`:musical_keyboard:`:musical_keyboard:|`:vhs:`:vhs:|
|`:curly_loop:`:curly_loop:|`:musical_note:`:musical_note:|`:vibration_mode:`:vibration_mode:|
|`:currency_exchange:`:currency_exchange:|`:musical_score:`:musical_score:|`:video_camera:`:video_camera:|
|`:curry:`:curry:|`:mute:`:mute:|`:video_game:`:video_game:|
|`:custard:`:custard:|`:nail_care:`:nail_care:|`:violin:`:violin:|
|`:customs:`:customs:|`:name_badge:`:name_badge:|`:virgo:`:virgo:|
|`:cyclone:`:cyclone:|`:national_park:`:national_park:|`:volcano:`:volcano:|
|`:dagger:`:dagger:|`:nauseated_face:`:nauseated_face:|`:volleyball:`:volleyball:|
|`:dancer:`:dancer:|`:necktie:`:necktie:|`:vs:`:vs:|
|`:dancing_women:`:dancing_women:|`:negative_squared_cross_mark:`:negative_squared_cross_mark:|`:vulcan_salute:`:vulcan_salute:|
|`:dancing_men:`:dancing_men:|`:nerd_face:`:nerd_face:|`:walking_man:`:walking_man:|
|`:dango:`:dango:|`:neutral_face:`:neutral_face:|`:walking_woman:`:walking_woman:|
|`:dark_sunglasses:`:dark_sunglasses:|`:new:`:new:|`:waning_crescent_moon:`:waning_crescent_moon:|
|`:dart:`:dart:|`:new_moon:`:new_moon:|`:waning_gibbous_moon:`:waning_gibbous_moon:|
|`:dash:`:dash:|`:new_moon_with_face:`:new_moon_with_face:|`:warning:`:warning:|
|`:date:`:date:|`:newspaper:`:newspaper:|`:wastebasket:`:wastebasket:|
|`:deciduous_tree:`:deciduous_tree:|`:newspaper_roll:`:newspaper_roll:|`:watch:`:watch:|
|`:deer:`:deer:|`:next_track_button:`:next_track_button:|`:water_buffalo:`:water_buffalo:|
|`:department_store:`:department_store:|`:ng:`:ng:|`:watermelon:`:watermelon:|
|`:derelict_house:`:derelict_house:|`:no_good_man:`:no_good_man:|`:wave:`:wave:|
|`:desert:`:desert:|`:no_good_woman:`:no_good_woman:|`:wavy_dash:`:wavy_dash:|
|`:desert_island:`:desert_island:|`:night_with_stars:`:night_with_stars:|`:waxing_crescent_moon:`:waxing_crescent_moon:|
|`:desktop_computer:`:desktop_computer:|`:no_bell:`:no_bell:|`:wc:`:wc:|
|`:male_detective:`:male_detective:|`:no_bicycles:`:no_bicycles:|`:weary:`:weary:|
|`:diamond_shape_with_a_dot_inside:`:diamond_shape_with_a_dot_inside:|`:no_entry:`:no_entry:|`:wedding:`:wedding:|
|`:diamonds:`:diamonds:|`:no_entry_sign:`:no_entry_sign:|`:weight_lifting_man:`:weight_lifting_man:|
|`:disappointed:`:disappointed:|`:no_mobile_phones:`:no_mobile_phones:|`:weight_lifting_woman:`:weight_lifting_woman:|
|`:disappointed_relieved:`:disappointed_relieved:|`:no_mouth:`:no_mouth:|`:whale:`:whale:|
|`:dizzy:`:dizzy:|`:no_pedestrians:`:no_pedestrians:|`:whale2:`:whale2:|
|`:dizzy_face:`:dizzy_face:|`:no_smoking:`:no_smoking:|`:wheel_of_dharma:`:wheel_of_dharma:|
|`:do_not_litter:`:do_not_litter:|`:non-potable_water:`:non-potable_water:|`:wheelchair:`:wheelchair:|
|`:dog:`:dog:|`:nose:`:nose:|`:white_check_mark:`:white_check_mark:|
|`:dog2:`:dog2:|`:notebook:`:notebook:|`:white_circle:`:white_circle:|
|`:dollar:`:dollar:|`:notebook_with_decorative_cover:`:notebook_with_decorative_cover:|`:white_flag:`:white_flag:|
|`:dolls:`:dolls:|`:notes:`:notes:|`:white_flower:`:white_flower:|
|`:dolphin:`:dolphin:|`:nut_and_bolt:`:nut_and_bolt:|`:white_large_square:`:white_large_square:|
|`:door:`:door:|`:o:`:o:|`:white_medium_small_square:`:white_medium_small_square:|
|`:doughnut:`:doughnut:|`:o2:`:o2:|`:white_medium_square:`:white_medium_square:|
|`:dove:`:dove:|`:ocean:`:ocean:|`:white_small_square:`:white_small_square:|
|`:dragon:`:dragon:|`:octopus:`:octopus:|`:white_square_button:`:white_square_button:|
|`:dragon_face:`:dragon_face:|`:oden:`:oden:|`:wilted_flower:`:wilted_flower:|
|`:dress:`:dress:|`:office:`:office:|`:wind_chime:`:wind_chime:|
|`:dromedary_camel:`:dromedary_camel:|`:oil_drum:`:oil_drum:|`:wind_face:`:wind_face:|
|`:drooling_face:`:drooling_face:|`:ok:`:ok:|`:wine_glass:`:wine_glass:|
|`:droplet:`:droplet:|`:ok_hand:`:ok_hand:|`:wink:`:wink:|
|`:drum:`:drum:|`:ok_man:`:ok_man:|`:wolf:`:wolf:|
|`:duck:`:duck:|`:ok_woman:`:ok_woman:|`:woman:`:woman:|
|`:dvd:`:dvd:|`:old_key:`:old_key:|`:woman_artist:`:woman_artist:|
|`:e-mail:`:e-mail:|`:older_man:`:older_man:|`:woman_astronaut:`:woman_astronaut:|
|`:eagle:`:eagle:|`:older_woman:`:older_woman:|`:woman_cartwheeling:`:woman_cartwheeling:|
|`:ear:`:ear:|`:om:`:om:|`:woman_cook:`:woman_cook:|
|`:ear_of_rice:`:ear_of_rice:|`:on:`:on:|`:woman_facepalming:`:woman_facepalming:|
|`:earth_africa:`:earth_africa:|`:oncoming_automobile:`:oncoming_automobile:|`:woman_factory_worker:`:woman_factory_worker:|
|`:earth_americas:`:earth_americas:|`:oncoming_bus:`:oncoming_bus:|`:woman_farmer:`:woman_farmer:|
|`:earth_asia:`:earth_asia:|`:oncoming_police_car:`:oncoming_police_car:|`:woman_firefighter:`:woman_firefighter:|
|`:egg:`:egg:|`:oncoming_taxi:`:oncoming_taxi:|`:woman_health_worker:`:woman_health_worker:|
|`:eggplant:`:eggplant:|`:open_file_folder:`:open_file_folder:|`:woman_judge:`:woman_judge:|
|`:eight_pointed_black_star:`:eight_pointed_black_star:|`:open_hands:`:open_hands:|`:woman_juggling:`:woman_juggling:|
|`:eight_spoked_asterisk:`:eight_spoked_asterisk:|`:open_mouth:`:open_mouth:|`:woman_mechanic:`:woman_mechanic:|
|`:electric_plug:`:electric_plug:|`:open_umbrella:`:open_umbrella:|`:woman_office_worker:`:woman_office_worker:|
|`:elephant:`:elephant:|`:ophiuchus:`:ophiuchus:|`:woman_pilot:`:woman_pilot:|
|`:email:`:email:|`:orange_book:`:orange_book:|`:woman_playing_handball:`:woman_playing_handball:|
|`:end:`:end:|`:orthodox_cross:`:orthodox_cross:|`:woman_playing_water_polo:`:woman_playing_water_polo:|
|`:envelope_with_arrow:`:envelope_with_arrow:|`:outbox_tray:`:outbox_tray:|`:woman_scientist:`:woman_scientist:|
|`:euro:`:euro:|`:owl:`:owl:|`:woman_shrugging:`:woman_shrugging:|
|`:european_castle:`:european_castle:|`:ox:`:ox:|`:woman_singer:`:woman_singer:|
|`:european_post_office:`:european_post_office:|`:package:`:package:|`:woman_student:`:woman_student:|
|`:evergreen_tree:`:evergreen_tree:|`:page_facing_up:`:page_facing_up:|`:woman_teacher:`:woman_teacher:|
|`:exclamation:`:exclamation:|`:page_with_curl:`:page_with_curl:|`:woman_technologist:`:woman_technologist:|
|`:expressionless:`:expressionless:|`:pager:`:pager:|`:woman_with_turban:`:woman_with_turban:|
|`:eye:`:eye:|`:paintbrush:`:paintbrush:|`:womans_clothes:`:womans_clothes:|
|`:eye_speech_bubble:`:eye_speech_bubble:|`:palm_tree:`:palm_tree:|`:womans_hat:`:womans_hat:|
|`:eyeglasses:`:eyeglasses:|`:pancakes:`:pancakes:|`:women_wrestling:`:women_wrestling:|
|`:eyes:`:eyes:|`:panda_face:`:panda_face:|`:womens:`:womens:|
|`:face_with_head_bandage:`:face_with_head_bandage:|`:paperclip:`:paperclip:|`:world_map:`:world_map:|
|`:face_with_thermometer:`:face_with_thermometer:|`:paperclips:`:paperclips:|`:worried:`:worried:|
|`:fist_oncoming:`:fist_oncoming:|`:parasol_on_ground:`:parasol_on_ground:|`:wrench:`:wrench:|
|`:factory:`:factory:|`:parking:`:parking:|`:writing_hand:`:writing_hand:|
|`:fallen_leaf:`:fallen_leaf:|`:part_alternation_mark:`:part_alternation_mark:|`:x:`:x:|
|`:family_man_woman_boy:`:family_man_woman_boy:|`:partly_sunny:`:partly_sunny:|`:yellow_heart:`:yellow_heart:|
|`:family_man_boy:`:family_man_boy:|`:passenger_ship:`:passenger_ship:|`:yen:`:yen:|
|`:family_man_boy_boy:`:family_man_boy_boy:|`:passport_control:`:passport_control:|`:yin_yang:`:yin_yang:|
|`:family_man_girl:`:family_man_girl:|`:pause_button:`:pause_button:|`:yum:`:yum:|
|`:family_man_girl_boy:`:family_man_girl_boy:|`:peace_symbol:`:peace_symbol:|`:zap:`:zap:|
|`:family_man_girl_girl:`:family_man_girl_girl:|`:peach:`:peach:|`:zipper_mouth_face:`:zipper_mouth_face:|
|`:family_man_man_boy:`:family_man_man_boy:|`:peanuts:`:peanuts:|`:zzz:`:zzz:|
|`:family_man_man_boy_boy:`:family_man_man_boy_boy:|`:pear:`:pear:||
|`:family_man_man_girl:`:family_man_man_girl:|`:pen:`:pen:||
|`:family_man_man_girl_boy:`:family_man_man_girl_boy:|`:pencil2:`:pencil2:||
|`:family_man_man_girl_girl:`:family_man_man_girl_girl:|`:penguin:`:penguin:||
|`:family_man_woman_boy_boy:`:family_man_woman_boy_boy:|`:pensive:`:pensive:||
|`:family_man_woman_girl:`:family_man_woman_girl:|`:performing_arts:`:performing_arts:||
|`:family_man_woman_girl_boy:`:family_man_woman_girl_boy:|`:persevere:`:persevere:||
|`:family_man_woman_girl_girl:`:family_man_woman_girl_girl:|`:person_fencing:`:person_fencing:||
|`:family_woman_boy:`:family_woman_boy:|`:pouting_woman:`:pouting_woman:||
|`:family_woman_boy_boy:`:family_woman_boy_boy:|`:phone:`:phone:||
|`:family_woman_girl:`:family_woman_girl:|`:pick:`:pick:||
|`:family_woman_girl_boy:`:family_woman_girl_boy:|`:pig:`:pig:||
|`:family_woman_girl_girl:`:family_woman_girl_girl:|`:pig2:`:pig2:||
|`:family_woman_woman_boy:`:family_woman_woman_boy:|`:pig_nose:`:pig_nose:||
|`:family_woman_woman_boy_boy:`:family_woman_woman_boy_boy:|`:pill:`:pill:||
|`:family_woman_woman_girl:`:family_woman_woman_girl:|`:pineapple:`:pineapple:||
|`:family_woman_woman_girl_boy:`:family_woman_woman_girl_boy:|`:ping_pong:`:ping_pong:||
|`:family_woman_woman_girl_girl:`:family_woman_woman_girl_girl:|`:pisces:`:pisces:||
|`:fast_forward:`:fast_forward:|`:pizza:`:pizza:||
|`:fax:`:fax:|`:place_of_worship:`:place_of_worship:||
|`:fearful:`:fearful:|`:plate_with_cutlery:`:plate_with_cutlery:||
|`:feet:`:feet:|`:play_or_pause_button:`:play_or_pause_button:||
|`:female_detective:`:female_detective:|`:point_down:`:point_down:||
|`:ferris_wheel:`:ferris_wheel:|`:point_left:`:point_left:||
|`:ferry:`:ferry:|`:point_right:`:point_right:||
|`:field_hockey:`:field_hockey:|`:point_up:`:point_up:||
|`:file_cabinet:`:file_cabinet:|`:point_up_2:`:point_up_2:||

