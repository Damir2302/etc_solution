$(document).ready(function() {
    let filterSlider = $(".filterSlider");

    if (filterSlider.length > 0) {
        filterSlider.each(function(index) {
            let $this = $(this);
            $this.addClass('filter-slider-' + index);

            $(".filter-slider-" + index).slider({
                animate: "slow",
                range: true,
                values: [ 0, 100 ],
                slide : function(event, ui) {
                    // Меняем значение при перемещении ползунка MIN
                    $this.parent().find(".value-min").text(ui.values[ 0 ]);
                    // Меняем значение при перемещении ползунка MAX
                    $this.parent().find(".value-max").text(ui.values[ 1 ]);

                    // Меняем значение ползунка при вводе поля MIN
                    $this.parent().find(".input-min").val(ui.values[ 0 ]);
                    // Меняем значение ползунка при вводе поля MIN
                    $this.parent().find(".input-max").val(ui.values[ 1 ]);
                }
            });

            // При вводе значения MIN, перемещаем ползунок
            $this.parent().find( ".input-min" ).on( "input", function() {
                $(".filterSlider").slider( "values", [ $(this).val(),  $(".input-max").val() ] );
                $(".value-min").text($(".filterSlider").slider("values", 0));
                console.log('sd')
            });

            // При вводе значения MAX, перемещаем ползунок
            $( ".input-max" ).on( "input", function() {
                $(".filterSlider").slider( "values", [ $(".input-min").val(), $(this).val() ] );
                $(".value-max").text($(".filterSlider").slider("values", 1));
            });

            // Устанавливаем начальное значение поля MIN
            $(".value-min").text($(".filterSlider").slider("values", 0));
            // Устанавливаем начальное значение поля MAX
            $(".value-max").text($(".filterSlider").slider("values", 1));

            // Устанавливаем начальное значение ползунка MIN
            $(".input-min").val($(".filterSlider").slider("values", 0));
            // Устанавливаем начальное значение ползунка MAX
            $(".input-max").val($(".filterSlider").slider("values", 1));
        });
    }

    // $('.aside__filter').on('click', function() {
    //     $(this).find('ul[class^=filter__], .filter__price').slideToggle();
    //     $(this).toggleClass('opened');
    // });

    // $('.mobile__filter-btn').on('click', function() {
    //     $('.aside__block').addClass('opened');
    //     $('body').addClass('menu-layer');
    //     $('.aside-menu-layer').addClass('active');
    // });

});