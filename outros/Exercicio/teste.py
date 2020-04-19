import re
import datetime
import pytz

# text = "randon string, myNama@gmail.com, some more text, newName@live.com"
# pattern = re.compile("[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+")
# result = pattern.findall(text)
# print (result)

today = datetime.date.today()
print(today)

birthday = datetime.date(1970, 7, 8)
print(birthday)

days_since_birth = (today - birthday)
print(days_since_birth)

print(today.weekday())
print(today.day)
print(today.month)
print(today.year)

# for tz in pytz.all_timezones:
#     print(tz)

datetime_today = datetime.datetime.now(tz=pytz.UTC)
datetime_pacific = datetime_today.astimezone(pytz.timezone('US/Pacific'))
print(datetime_pacific)

print(datetime_pacific.strftime('%B %d %Y'))
