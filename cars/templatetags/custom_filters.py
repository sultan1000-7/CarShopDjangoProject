from django import template

register = template.Library()

@register.filter
def space_separated(value):
    """Форматирует число с пробелами вместо тысячных разделителей."""
    try:
        value = float(value)
        # Если число целое, без дробной части
        if value.is_integer():
            return "{:,.0f}".format(value).replace(",", " ")
        else:
            return "{:,.2f}".format(value).replace(",", " ")
    except (ValueError, TypeError):
        return value