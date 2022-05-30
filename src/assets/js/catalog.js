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
                $this.slider( "values", [ $(this).val(),  $this.parent().find(".input-max").val() ] );
                $this.parent().find(".value-min").text($this.slider("values", 0));
            });

            // При вводе значения MAX, перемещаем ползунок
            $this.parent().find( ".input-max" ).on( "input", function() {
                $this.slider( "values", [ $this.parent().find(".input-min").val(), $(this).val() ] );
                $this.parent().find(".value-max").text($this.slider("values", 1));
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

    $('.filter__title').on('click', function() {
        $(this).parent().toggleClass('active');
        $(this).parent().find('.filter__wrapper').slideToggle();
    });

    /////////////////////////////////////////////////////////////////////
    // КАРТОЧКА ТОВАРА
    ////////////////////////////////////////////////////////////////////
    let item_cart_pagination;

    item_cart_pagination = new Swiper('.swiper-item-pagination', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        direction: 'horizontal',

        breakpoints: {
            768: {
                direction: 'vertical'
            }
        }
    });

    let item_cart;

    item_cart = new Swiper('.swiper-item', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        thumbs: {
          swiper: item_cart_pagination,
        },
    });

});