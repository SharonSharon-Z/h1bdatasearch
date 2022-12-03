import pandas as pd

#create DataFrame
df = pd.read_csv("/Users/XuerongZhang/Desktop/LCA_Disclosure_Data_FY2022_Q4.csv", usecols=["CASE_NUMBER","CASE_STATUS", "JOB_TITLE", "EMPLOYER_NAME", "WAGE_RATE_OF_PAY_FROM","WORKSITE_CITY", "WORKSITE_COUNTY", "WORKSITE_STATE"])
df.rename(columns = {'WAGE_RATE_OF_PAY_FROM':'WAGE_RATE'}, inplace = True)
print("read excel done")
# df.loc[len(df['WAGE_RATE']) < 9, 'WAGE_RATE'] = df['WAGE_RATE'] * 40 * 52
df = df.loc[df['CASE_STATUS'] == "Certified"]
df = df.loc[df['WAGE_RATE'].str.len() > 9]

df['EMPLOYER_NAME'] = df['EMPLOYER_NAME']
df['JOB_TITLE'] = df['JOB_TITLE']
df['WORKSITE_CITY'] = df['WORKSITE_CITY']
df['WORKSITE_COUNTY'] = df['WORKSITE_COUNTY']
df['YEAR'] = '2022'

df.columns = df.columns.str.lower()
# print(list(df))
# df['WAGE_RATE'] = df['WAGE_RATE'].astype(int)
# print(df.dtypes)

# print(df.head());
df.to_csv('/Users/XuerongZhang/Desktop/file4.csv', index=False)
print("Done: clean CSV")

