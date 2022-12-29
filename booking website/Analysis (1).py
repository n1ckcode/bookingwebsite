#!/usr/bin/env python
# coding: utf-8

# In[5]:


import pandas as pd

df = pd.read_csv("StockxData.csv")

print(df)


# In[3]:


df['Sale Price'] = df['Sale Price'].astype(int)
print(df.dtypes) 


# In[5]:


df['Retail Price'] = df['Retail Price'].astype(int)
print(df.dtypes) 


# In[7]:


df['Profit'] = df['Sale Price'] - df['Sale Price'] * 0.10 - df['Retail Price']
print(df)


# In[10]:


import plotly.express as px


# In[22]:


# add a new column 'Profit' 
df = df.assign(Profit=df['Sale Price'] - df['Sale Price'] * 0.10 - df['Retail Price'])

print(df)


# In[37]:


# group the dataframe by the 'Sneaker Name' column
grouped_df = df.groupby('Sneaker Name')

# calculate the sum of the 'Profit' column for each group
sum_df = grouped_df['Profit'].sum()

sum_df = sum_df.sort_values(ascending=False)

topten = sum_df.head(10)

print("Top ten most profitable sneakers sold on StockX in 2019 ")

print(topten)






# In[52]:


import matplotlib.pyplot as plt

# Plot a bar chart
graph = topten.plot(kind='bar', x='Sneaker Name', y='Profit')
 
    
# Set the title, x-axis label, and y-axis label   
graph.set_title('Top 10 Most Profitable Sneakers 2019')
graph.set_xlabel('Sneaker Model')
graph.set_ylabel('Profits ' + '(in millions)')


# Show the plot
plt.show()


# In[53]:


print("hello")


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




