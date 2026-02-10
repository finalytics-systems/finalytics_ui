// Finalytics UI - Behavior Layer
// Reuses and generalizes interaction patterns from the `construction` app

frappe.provide('frappe.finalytics_ui');

frappe.finalytics_ui = {
    setup_custom_cards: function () {
        // Animate cards/widgets with a subtle fade-in-up
        setTimeout(() => {
            $('.widget-group').each(function (index) {
                $(this).css({
                    'animation': 'finalytics-fade-in-up 0.6s ease forwards',
                    'animation-delay': `${index * 0.1}s`,
                    'opacity': '0'
                });

                setTimeout(() => {
                    $(this).css('opacity', '1');
                }, index * 100);
            });
        }, 500);
    },

    setup_sidebar_effects: function () {
        // Hover effect for sidebar items (desk sidebar)
        $('.desk-sidebar .sidebar-item').hover(
            function () {
                $(this).css('transform', 'translateX(4px)');
            },
            function () {
                $(this).css('transform', 'translateX(0)');
            }
        );
    }
};

// Initialize behaviours when desk page is ready
$(document).ready(function () {
    // Guard for desk presence – still safe on website
    frappe.finalytics_ui.setup_custom_cards();
    frappe.finalytics_ui.setup_sidebar_effects();
});

