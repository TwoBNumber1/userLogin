package com.sy.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.sy.crawl.HttpConnectionManager;

public class ThreadDestroyListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

		for( final Thread th : Thread.getAllStackTraces().keySet() ) {
			System.out.println("Ïß³Ì"+ th.getName() );
			
		}
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}

}
