//Tooltipster plugin
//https://iamceege.github.io/tooltipster/

    $('.customTooltip').tooltipster({

        trigger: 'custom',
        triggerOpen: {
            click: true
        },
        triggerClose: {
            click: true,
            scroll: true
        },
        contentAsHTML: true,
        interactive: true,
        arrow: false,
        side:  'bottom',
        trackOrigin: true,
        theme: 'tooltipster-light',
        functionPosition: function(instance, helper, position) {

            var positionInit = $('.toogle').position();

            position.coord.left = positionInit.left - 170;
            position.coord.top = positionInit.top + 40;

            return position;
        },
        functionReady: function(instance, helper) {
            
            var tooltip = $(helper.tooltip);            
            
            tooltip.find('.listChoice').on("click", function() {

                tooltip.find("#tooltip_view_content").attr("view", "list");
                $(".toogle").attr("view", "list");
                
                instance.close();

                //call function to change the page content

            });

            tooltip.find('.tableChoice').on("click", function() {

                tooltip.find("#tooltip_view_content").attr("view", "table");
                $(".toogle").attr("view", "table");

                instance.close();

                //call function to change the page content

            });
        }
    });
