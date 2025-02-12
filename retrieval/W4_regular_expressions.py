import re

def contains_only_alphanumeric(string):
    return bool(re.match(r'^[A-Za-z0-9]+$', string))

def find_literals(substring, string):
    return bool(re.search(re.escape(substring), string))

def remove_parentheses(string):
    return re.sub(r'\s*\(.*\)', '', string)

def match_words(string):
    matches = re.findall(r'\bP\w+', string)

    return len(matches) >= 2